'use server'


import { db } from "@/server/db"
import { bookings } from "@/server/db/schema"
import {Booking} from "@/utils/types"
import { randomInt } from "crypto"
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend';
import { formatDate } from 'date-fns'
import { EmailBookingTemplate } from "@/components/component/email-template"
import {eq} from "drizzle-orm"


export async function  createBookings  (body: Booking[])  {
   try {
     const createBookings =  body!.map(datum => {
         return {...datum, id: randomInt(1000), status: 'pending', slug: datum.item_name.replace(/\s+/g, '-').toLowerCase() }
      })
      /*  const booking: Booking = {
          id: randomInt(1000),
          user_id: 2,
          user_name: name,
          user_email: email,
          user_contact: contact,
          item_id: 1,
          item_name: item.name as  string,
          item_image: item.image as string,
          start_at: startTime ,
          end_at: endTime,
          status: 'pending'
       } */
    
        await db.insert(bookings).values(createBookings)
        const resend = new Resend(process.env.RESEND_API_KEY);
        const startDate = `${body[0].start_at?.toLocaleDateString()}`
        const end_date = `${body[0].end_at?.toLocaleDateString()}`
         const {data} = await resend.emails.send({
            from: 'Acme <chen@ejevent.co>',
            to: [body[0].user_email],
            subject: "booking confirmed",
            react: EmailBookingTemplate({name: body[0].user_name,startDate: startDate, endDate: end_date }),
            text: "Your bookings were successful"
         })
         console.log("the email id is", data)
       revalidatePath('/bookings')
       return {
          message: 'Booking created successfully',
          status: 'success'
       }
   } catch (error) {
        console.error(error);
        return {
           message: 'Please try again later',

           status: 'error'
        }
   }
  }

  export async function cancelBooking (id: number){
   try {
      await db.update(bookings).set({status: 'cancelled'}).where(eq(bookings.id, id ))
      revalidatePath('/bookings')
      return {
         message: "your booking was cancelled successfully",
         status: 'success'
      }
   } catch (error) {
      console.error(error)
      return {
         status:'error',
         message: "Please try again later"
      }
      
   }
  }
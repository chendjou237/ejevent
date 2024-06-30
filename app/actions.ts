'use server'


import { db } from "@/server/db"
import { bookings } from "@/server/db/schema"
import {Booking} from "@/utils/types"
import { randomInt } from "crypto"
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend';
import { formatDate } from 'date-fns'
import { EmailTemplate } from "@/components/component/email-template"



export async function  createBookings  (data: Booking[])  {
   try {
     const createBookings =  data.map(datum => {
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

await resend.emails.send({
  from: 'Honore <chenxhenor@gmail.com>',
  to:[ `@${data[0].user_email}`],
  subject: ' 🎉 Congrats Your Booking was Confirmed! 🎉',
  text: 'it works!',
  react: EmailTemplate({firstName: data[0].user_name})  as React.ReactElement
});
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
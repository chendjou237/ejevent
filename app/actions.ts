'use server'


import { db } from "@/server/db"
import { bookings, decorations } from "@/server/db/schema"
import {Booking, Decoration} from "@/utils/types"
import { randomInt } from "crypto"
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend';
import { formatDate } from 'date-fns'
import { EmailBookingTemplate } from "@/components/component/email-template"
import {eq} from "drizzle-orm"
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";


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
            to: [body[0].user_email, 'maivalaetitia@gmail.com'],
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

           status: 'failed',
           error
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
         message: "Please try again later",
         error
      }
      
   }
  }

  export async function deleteDecoration(id: number){
   try {
      await db.delete(decorations).where(eq(decorations.id, id))
      revalidatePath('/dashboard/products')
      revalidatePath('/dashboard/services')
      return {
         status: 'success',
         message: 'decorations deleted successfully'
      }
   } catch (error) {
      console.error(error)
      return {
         status: 'failed',
         message: 'please try later,if persist contact admin',
         error: error
      }
   }
  }

  export async function CreateDecoration(name: string, description: string, images: string[], type: string){
      const data: Decoration= {
         id: randomInt(10000),
         name,
         description,
         type,
         images,
         price: 0,
         image: images[0],
         slug: name.replace(/\s+/g, '-').toLowerCase(),
         status: 'available'
      }

      try {
         await db.insert(decorations).values(data)
         revalidatePath('/dashboard/products')
         revalidatePath('/dashboard/services')
         return {
            status: 'success',
            message: 'decorations created successfully'
         }
      } catch (error) {
         console.error(error)
         return {
            status: 'failed',
            message: 'Pleast retry or contact admin',
            error
         }
      }
  }


  export const uploadFile = async (file: any, folder: any) => {
      try {
        const filename = nanoid();
        const storageRef = ref(
          storage,
          `${folder}${filename}.${file.name.split(".").pop()}`
        );
        const res = await uploadBytes(storageRef, file);
    
        return res.metadata.fullPath;
      } catch (error) {
        throw error;
      }
    };

    export const getFile = async (path: any) => {
      try {
        const fileRef = ref(storage, path);
        return getDownloadURL(fileRef);
      } catch (error) {
        throw error;
      }
    };

    export async function editDecoration(decoration: Decoration){
      try {
        await db.update(decorations).set(decoration).where(eq(decorations.id, decoration.id))
         revalidatePath('/dashboard/')
         return {
            status: 'success',
            message: 'your decoration was edited successfully'
         }
      } catch (error) {
         console.error(error)
         return {
            status: 'failed',
            message: 'please try again later',
            error
         }
      }
    }
    export async function editBooking(booking: Booking){
      try {
        await db.update(bookings).set(booking).where(eq(bookings.id, booking.id))
         revalidatePath('/dashboard/')
         return {
            status: 'success',
            message: 'your booking was confirmed successfully'
         }
      } catch (error) {
         console.error(error)
         return {
            status: 'failed',
            message: 'please try again later',
            error
         }
      }
    }
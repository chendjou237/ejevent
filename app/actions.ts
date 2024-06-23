'use server'


import {db} from "@/server/db"
import {bookings} from "@/server/db/schema"

import {Booking, Item} from "@/utils/types"
import { randomInt, randomUUID } from "crypto"
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation"



export async function  createBooking  (name: string, email: string, contact: string , item: Item, startTime: Date, endTime: Date )  {
   try {
       const booking: Booking = {
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
       }
    
       const result = await db.insert(bookings).values(booking)
       revalidatePath('/bookings')
       return {
          message: 'Booking created successfully',
          status: 'success'
       }
   } catch (error) {
        console.error(error);
        return {
           message: 'Booking failed',
           status: 'error'
        }
   }
  }
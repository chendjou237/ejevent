'use server'


import { db } from "@/server/db"
import { bookings } from "@/server/db/schema"
import {Booking} from "@/utils/types"
import { randomInt } from "crypto"
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend';
import { formatDate } from 'date-fns'



export async function  createBookings  (data: Booking[])  {
   try {
     const createBookings =  data.map(datum => {
         return {...datum, id: randomInt(1000), status: 'pending'}
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
        const resend = new Resend('re_E9LwPAtd_MjKH1mHQyB9fpYSYi2UGroLJ');

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: `@${data[0].user_email}`,
  subject: ' 🎉 Congrats Your Booking was Confirmed! 🎉',
  text: 'it works!',
  html: 
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding: 10px;
            color: #888;
            font-size: 0.8em;
        }
        .highlight {
            color: #4CAF50;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
       hiiiiiiiiiiii
    </div>
</body>
</html>`
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
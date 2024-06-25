'server only'

import { Decoration, Service } from "@/utils/types"

import { Booking, Item } from "@/utils/types"
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation"
import { db } from "./db"
import { bookings } from "./db/schema"
import {auth, currentUser} from "@clerk/nextjs/server"


export function getServices(){
   const services: Service[] = [
      {
         id: "1", 
         name: "Birthday Decoration",
         description: "Birthday Decoration",
         price: 100,
         image: "/decoration_3.jpg"
      },
      {
         id: "2",
         name: "Wedding Decoration",
         description: "Wedding Decoration",
         price: 200,
         image: "/decoration_2.jpg"
      },
      {
         id: "3",
         name: "Baby Shower",
         description: "Baby Shower",
         price: 150,
         image: "/baby_shower.jpg"
      },
      {
         id: "4",
         name: "Surprise Events",
         description: "Surprise Events",
         price: 300,
         image: "/surprise_event.jpg"
      },
      {
         id: "5",
         name: "Catering",
         description: "Catering",
         price: 250,
         image: "/cartering.jpg"
      }
   ]
   return services
}

export function getBookingItem(id: string){
   const items: Item[] = [
      {
         id: "6",
         name: "slide",
         description: "kids playing slider",
         price: 100,
         image: "/slide.jpg"
      },
      {
         id: "2",
         name: "Wedding Decoration",
         description: "Wedding Decoration",
         price: 200,
         image: "/decoration_2.jpg"
      },
      {
         id: "3",
         name: "Baby Shower",
         description: "Baby Shower",
         price: 150,
         image: "/baby_shower.jpg"
      },
      {
         id: "4",
         name: "Surprise Events",
         description: "Surprise Events",
         price: 300,
         image: "/surprise_event.jpg"
      },
      {
         id: "5",
         name: "Catering",
         description: "Catering",
         price: 250,
         image: "/cartering.jpg"
      },
      {
         id: "1",
         name: "Birthday Decoration",
         description: "Birthday Decoration",
         price: 100,
         image: "/decoration_3.jpg"
      },
      {
         id: "2",
         name: "Wedding Decoration",
         description: "Wedding Decoration",
         price: 200,
         image: "/decoration_2.jpg"
      },
      {
         id: "3",
         name: "Baby Shower",
         description: "Baby Shower",
         price: 150,
         image: "/baby_shower.jpg"
      },
      {
         id: "4",
         name: "Surprise Events",
         description: "Surprise Events",
         price: 300,
         image: "/surprise_event.jpg"
      },
      {
         id: "5",
         name: "Catering",
         description: "Catering",
         price: 250,
         image: "/cartering.jpg"
      }
   ]
   return items.find(item => item.name === id)
}

export function getDecorations(){
   const decorations: Decoration[] = [
      {
         id: "1",
         name: "Birthday Decoration",
         description: "Birthday Decoration",
         price: 100,
         image: "/decoration_3.jpg"
      },
      {
         id: "2",
         name: "Wedding Decoration",
         description: "Wedding Decoration",
         price: 200,
         image: "/decoration_2.jpg"
      },
      {
         id: "3",
         name: "Baby Shower",
         description: "Baby Shower",
         price: 150,
         image: "/baby_shower.jpg"
      },
      {
         id: "4",
         name: "Surprise Events",
         description: "Surprise Events",
         price: 300,
         image: "/surprise_event.jpg"
      },
      {
         id: "5",
         name: "Catering",
         description: "Catering",
         price: 250,
         image: "/cartering.jpg"
      }
   ]
   return decorations

}

export function getService(name: string){
   const services = getServices()
   return services.find(service => service.name === name)
}

export function getDecoration(name: string){
   const decorations = getDecorations()
   return decorations.find(decoration => decoration.name === name)
}



export async function getBookingsSlots(item_name: string){
 const data = await  db.select({
      start_at: bookings.start_at,
      end_at: bookings.end_at,
      id: bookings.id
   }).from(bookings).where(eq(bookings.item_name, item_name))
   console.log(data);
   
   return data
}


export async function getBookings(){

   const {userId} = auth()
   if(!userId){
      redirect('/')
   }
   const user = await currentUser()

   try {
      const data = await db.select({
         id: bookings.id,
         user_id: bookings.user_id,
         user_name: bookings.user_name,
         user_email: bookings.user_email,
         user_contact: bookings.user_contact,
         item_id: bookings.item_id,
         item_name: bookings.item_name,
         item_image: bookings.item_image,
         start_at: bookings.start_at,
         end_at: bookings.end_at,
         status: bookings.status
      }).from(bookings).where(eq(bookings.user_email, user?.primaryEmailAddress?.emailAddress!))
   return data
   } catch (error) {
      console.error(error)
      return []
   }
}
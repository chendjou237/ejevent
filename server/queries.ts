'server only'

import { auth, currentUser } from "@clerk/nextjs/server"
import { eq } from 'drizzle-orm'
import { redirect } from "next/navigation"
import { db } from "./db"
import { bookings, decorations } from "./db/schema"
import { Decoration } from "@/utils/types"



export async function getServices (){
   const data = await getDecorations();
   return data.filter((decoration) => decoration.type === 'service')
}
export async function getProducts (){
   const data = await getDecorations();
   return data.filter((decoration) => decoration.type === 'product')
}

export async function getBookingItem(id: string){
  
   const items = await getDecorations()
   return items.find(item => item.name === id)
}

export async function getDecorations(){
try {
      const data: Decoration[] = await db.select().from(decorations);
      return data
} catch (error) {
   console.error(error)
   throw new Error('Error fetching decorations')
}  
}

export async function getService(name: string){
   const services = await getDecorations()
   return services.find(service => service.name === name)
}

export async function getDecoration(name: string){
   const decorations = await  getDecorations()
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

export async function getHomeData(){
   const services = await getServices()
   const decorations = await getProducts()
   return {services, decorations}
}
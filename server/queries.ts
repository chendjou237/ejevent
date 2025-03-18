'server only'

import { auth, currentUser } from "@clerk/nextjs/server"
import { eq } from 'drizzle-orm'
import { redirect } from "next/navigation"
import { db } from "./db"
import { bookings, decorations2 as decorations } from "./db/schema"
import {shuffleList} from "@/utils/helpers"
import { GalleryItemInterface } from "@/utils/types"
import { clerkClient } from '@clerk/nextjs/server';


export async function getServices (){
   const data = await getDecorations();
   const  services = data.filter((decoration) => decoration.type === 'service');
   return services
}
export async function getProducts (){
   const data = await getDecorations();
   const products =  data.filter((decoration) => decoration.type === 'product')
   return products;
}

export async function getBookingItem(slug: string){
   const items = await getDecorations()
   const result = items.find(item => item.slug === slug)
   return result
}

export async function getDecorations(){
try {
      const data = await db.select().from(decorations);

      return data
} catch (error) {
   console.error(error)
   throw new Error('Error fetching decorations')
}
}

export async function getService(name: string, local:'en'|'fr'){
   const services = await getDecorations()
   return services.find(service => service.name[local] === name)
}

export async function getDecorationBySlug(slug: string){
   const decorations = await  getDecorations()
   return decorations.find(decoration => decoration.slug === slug)
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
   const gallery = await getGalleryItems()
   return {services, decorations, gallery}
}

export async function getAllDecorationsSlug(){
   const data = await getDecorations()
   return data.map((decoration) => ({params: {slug: decoration.name}}))
}

export async function getGalleryItems(){
   const data = await getDecorations()
   var gallery: GalleryItemInterface[] = []
   data.forEach((decoration) => {
    decoration.images!.map(image => {
      gallery.push({
         title: decoration.name,
         description: decoration.description,
         image: image,
         id: decoration.id
      })
    })
   })
 return shuffleList( gallery)
}

export async function getUserList(){
   const response = await clerkClient.users.getUserList();
   console.log(response);
   const data = response.data.map(user => {user.id, user.banned, user.fullName, user.imageUrl, user.primaryEmailAddress?.emailAddress, user.primaryPhoneNumber?.phoneNumber})
   return data
}

import { CreateBooking } from "@/components/component/create-booking";
import {  getBookingsSlots } from "@/server/queries";

export default async function Page({params}: {params:{id: string}}) {
  const slots = await getBookingsSlots(params.id)
  
  return (
    <main className="p-16">
     {/* <Hero />
  <div className=" flex min-h-screen flex-col items-center justify-between">
     <Gallery />
     */}
    <CreateBooking/>
  {/* </div> */}
    </main>
  )
  
}

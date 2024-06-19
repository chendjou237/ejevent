import { CreateBooking } from "@/components/component/create-booking";
import { Gallery } from "@/components/component/gallery";
import { Hero } from "@/components/component/hero";

export default function Page({params}: {params:{id: string}}) {

  return (
    <main className="p-16">
     <Hero />
  <div className=" flex min-h-screen flex-col items-center justify-between">
     <Gallery />
    <CreateBooking/>
  </div>
    </main>
  )
  
}

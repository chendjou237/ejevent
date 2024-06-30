import { AboutUs } from "@/components/component/about-us";
import { Decorations } from "@/components/component/decorations";
import { ContactUs } from "@/components/component/contact-us";
import { Gallery } from "@/components/component/gallery";
import { Hero } from "@/components/component/hero";
import { Services } from "@/components/component/services";
import {getHomeData} from "@/server/queries";
import {Suspense} from "react"
export default  function Page() {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between">
     <Hero />
    <main className=" p-16">
     <Gallery />
     <AboutUs />
     <Suspense fallback={<div>Loading...</div>}>
     <ItemsSection />
     </Suspense>
     <ContactUs />
    </main>
    </div>
  );
}

async function ItemsSection() {
  const {services, decorations} = await getHomeData()
  return (
    <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between">
     <Services services={services}/>
     <Decorations decorations={decorations}/>
    </div>
  )
}
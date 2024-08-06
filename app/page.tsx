import { AboutUs } from "@/components/component/about-us";
import { Decorations } from "@/components/component/decorations";
import { ContactUs } from "@/components/component/contact-us";
import { Gallery } from "@/components/component/gallery";
import { Hero } from "@/components/component/hero";
import { Services } from "@/components/component/services";
import {getHomeData} from "@/server/queries";
import {Suspense} from "react"
import { SectionLoader } from "@/components/section-loader";
export default  function Page() {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between">
     <Hero />
    <main className="">

     <AboutUs />
     <Suspense fallback={<SectionLoader />}>
     <ItemsSection />
     </Suspense>
     <ContactUs />
    </main>
    </div>
  );
}

async function ItemsSection() {
  const {services, decorations, gallery} = await getHomeData()
  return (
<div className="">
           <Gallery items={gallery}/>
    <div className="flex flex-col justify-evenly lg:justify-between">
     <Decorations decorations={decorations!}/>
     <Services services={services}/>
    </div>
</div>
  )
}
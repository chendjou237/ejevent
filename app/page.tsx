import { AboutUs } from "@/components/component/about-us";
import { Decorations } from "@/components/component/decorations";
import { ContactUs } from "@/components/component/contact-us";
import { Gallery } from "@/components/component/gallery";
import { Hero } from "@/components/component/hero";
import { Services } from "@/components/component/services";

export default function Home() {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between">
     <Hero />
    <main className=" p-16">
     <Gallery />
     <AboutUs />
     <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between">
     <Services />
     <Decorations />
     </div>
     <ContactUs />
    </main>
    </div>
  );
}

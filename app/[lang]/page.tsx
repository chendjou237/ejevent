import { AboutUs } from "@/components/component/about-us";
import { Decorations } from "@/components/component/decorations";
import { ContactUs } from "@/components/component/contact-us";
import { Gallery } from "@/components/component/gallery";
import { Hero } from "@/components/component/hero";
import { Services } from "@/components/component/services";
import {getHomeData} from "@/server/queries";
import {Suspense} from "react"
import { SectionLoader } from "@/components/section-loader";
import {useLocale, useTranslations} from 'next-intl';

export default  function Page() {

const hero = useTranslations('hero')
const aboutUs = useTranslations('about-us')
const contactUs = useTranslations('contact-us')
const dictionary = useTranslations('contact-us')
const local = useLocale()

  return (

    <div className="flex min-h-screen flex-col items-center justify-between">
     <Hero title={hero('title')} description={hero('description')} button={hero('button')} />
    <main className="">
      

     <AboutUs title1={aboutUs('point-1-title')} title2={aboutUs('point-2-title')} title3={aboutUs('point-3-title')} description1={aboutUs('point-1-description')} description2={aboutUs('point-2-description')} description3={aboutUs('point-3-description')}/>
     <Suspense fallback={<SectionLoader />}>
     <ItemsSection local={local} />
     </Suspense>
     <ContactUs title={contactUs('title')} description={contactUs('description')}
    nameLabel={contactUs('name-label')} namePlaceholder={contactUs('name-placeholder')} emailLabel={contactUs('email-label')} emailPlaceholder={contactUs('email-placeholder')} phoneLabel={contactUs('phone-label')} phonePlaceholder={contactUs('phone-placeholder')} messageLabel={contactUs('message-label')} messagePlaceholder={contactUs('message-placeholder')} button={contactUs('button')}  contactInformation={contactUs('contact-information-title')} businessHour={contactUs('business-hour')} businessTime={contactUs('business-time')} closedTime={contactUs('closed-time')} whatsappButton={contactUs('whatsapp-button')}/>
    </main>
    </div>
  );
}

async function ItemsSection({local}:{local:string}) {
   const tGallery = useTranslations('gallery')
   const tDecorations = useTranslations('decorations')
const tServices = useTranslations('services')
  const {services, decorations, gallery} = await getHomeData()
  return (
<div className="">
           <Gallery items={gallery} title={tGallery('title')} description={tGallery('description')} local={local}/>
    <div className="flex flex-col justify-evenly lg:justify-between">
     <Decorations decorations={decorations!} title={tDecorations('title')} description={tDecorations('description')} />
     <Services services={services} title={tServices('title')} description={tServices('description')}/>
    </div>
</div>
  )
}

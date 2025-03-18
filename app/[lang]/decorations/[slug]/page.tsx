import { CreateBooking } from "@/components/component/create-booking";
import { DecorationItemGallery } from "@/components/decoration-item-gallery";
import { getDecorationBySlug, getDecorations } from "@/server/queries";
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({params}: {params:{slug: string}}) {

  try {
    const response = await getDecorationBySlug(params.slug)
    if(!response) {
      return {
        title: 'Decoration not found',
        description: 'The decoration you are looking for does not exist.'
      }
    }
    return {
      title: response.name,
      description: response.description,
      image: response.image
    }
  }
  catch(e) {
    return {
      title: 'Decoration not found',
      description: 'The decoration you are looking for does not exist.'
    }
  }
}

export async function generateStaticParams(){
  try {
    const result = await getDecorations()
 /*
    if(!response.ok){
      throw new Error(`Failed to fetch decorations: ${response.statusText}`)
  } */
/*   const result =  await response.json()
 */    if(!Array.isArray(result)){
      throw new Error('Invalid response from server ')
    }

    if(result.length === 0){
      return []
    }

    return result.map((decoration: {slug: string}) => {
      return {

          slug: decoration.slug
        }

  })
  } catch (error) {
    console.error(error)
    return []
  }
}


export default async function Page({params}: {params:{slug: string}}) {
  // const slots = await getBookingsSlots(params.slug)
  const rawItem = await getDecorationBySlug(params.slug as  string)
  const locale =  await getLocale()
  const item = {...rawItem!, name: rawItem!.name[locale], description: rawItem!.description[locale]}

  const t = await getTranslations('createBooking')

  const translations = {
    title: t('title'),
    subtitle: t('subtitle'),
    date: t('date'),
    booking: {
      title: t('booking.title'),
      scheduledDates: t('booking.scheduledDates'),
      startDate: t('booking.startDate'),
      endDate: t('booking.endDate'),
      service: t('booking.service')
    },
    addToCart: t('addToCart')
  }

  return (
    <main className="p-16">
     {/* <Hero />
  <div className=" flex min-h-screen flex-col items-center justify-between">
     <Gallery />
     */}
    <CreateBooking item={item} translations={translations} />
     <DecorationItemGallery title={item!.name } description={item!.description} images={item!.images!}/>
  {/* </div> */}
    </main>
  )

}

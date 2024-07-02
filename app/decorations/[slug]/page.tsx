import { CreateBooking } from "@/components/component/create-booking";
import { getBookingsSlots, getDecorationBySlug, getDecorations } from "@/server/queries";

/* export async function generateMetadata({params}: {params:{slug: string}}) {

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
 */
// export async function generateStaticParams(){
//   try {
//     const result = await getDecorations()
//  /*  
//     if(!response.ok){
//       throw new Error(`Failed to fetch decorations: ${response.statusText}`)
//   } */
// /*   const result =  await response.json()
//  */    if(!Array.isArray(result)){
//       throw new Error('Invalid response from server ')
//     }
  
//     if(result.length === 0){
//       return []
//     }
  
//     return result.map((decoration: {slug: string}) => {
//       return {
        
//           slug: decoration.slug
//         }
      
//   })
//   } catch (error) {
//     console.error(error)
//     return []
//   }
// }


export default async function Page({params}: {params:{slug: string}}) {
  // const slots = await getBookingsSlots(params.slug)
  const item = await getDecorationBySlug(params.slug as  string)!
  return (
    <main className="p-16">
     {/* <Hero />
  <div className=" flex min-h-screen flex-col items-center justify-between">
     <Gallery />
     */}
    <CreateBooking item={item}/>
  {/* </div> */}
    </main>
  )
  
}

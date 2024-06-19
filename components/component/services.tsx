/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/f6ZvutZg6Rj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/


/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import Card from "./card";

 

export function Services() {
  return (
    <section className=" p-4 md:p-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Our Services
            </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8">

      <Card   name='Birthday Decoration' image={"/placeholder.svg"} id="1" />
      <Card   name='Wedding Decoration' image={"/placeholder.svg"} id="2" />
      <Card   name='Baby Shower' image={"/placeholder.svg"} id="3" />
         <Card   name='Surprise Events' image={"/placeholder.svg"} id="4" />
      <Card   name='Catering' image={"/placeholder.svg"} id="5" />
      </div>
      
    </section>
  )
}

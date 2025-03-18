/* eslint-disable react/no-unescaped-entities */
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/51hlvi7bFbQ
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
import Link from "next/link"
import Image from "next/image"
   type Props = {
   title: string
   description: string

      button: string
   }

export function Hero({title, description, button}:Props) {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image src="/hero.jpg" alt="Hero Image" width={0} height={0} sizes="100vw" className="w-full h-full object-cover opacity-50 blur-md" />
      </div>
      <div className="relative z-10 container px-4 md:px-6 h-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl">
         { title}
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl md:text-2xl">
            {description}
          </p>
        </div>
        <Link
          href="#decorations"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
         {button}
        </Link>
      </div>
    </section>
  )
}

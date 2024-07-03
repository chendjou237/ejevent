/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/IKD6mPNKFb1
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function ContactUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fcf4d7]">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Have a question or want to book a consultation? Fill out the form below and we&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <Button type="submit" className="w-full md:w-auto">
                  Submit
                </Button>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 md:w-auto"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Contact us on WhatsApp
                </a>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">Canada 🇨🇦 Toronto Ontario
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">+1 (647) 674-9434</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">maivalaetitia@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Business Hours</h3>
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-500 dark:text-gray-400">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

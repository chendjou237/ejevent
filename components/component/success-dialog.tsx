/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1NFywZMxAYi
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
"use client"

import { JSX, SVGProps, useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs";
import {useRouter} from "next/navigation"
import {  SignInButton } from '@clerk/nextjs'


interface SuccessDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function SuccessDialog( { open, setOpen }: SuccessDialogProps) {
  const {isLoaded, isSignedIn, user} = useUser()
  const router = useRouter()
  const handleNavigationToReservation = () => {
    router.push('/bookings')
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <CircleCheckIcon className="size-12 text-green-500" />
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold">Decorations Booked!</h3>
            <p className="text-muted-foreground">
              Congratulations, your decorations have been successfully booked. We&apos;re excited for your event!
            </p>
            <p className="text-muted-foreground">
              {isSignedIn ? `We&apos;ll send a confirmation email to ${user.primaryEmailAddress?.emailAddress}` : "We'll send a confirmation email to your email address, create and account to view your list of reservation"}
            </p>
          </div>
        </div>
        <DialogFooter>
          <div>
            {isSignedIn ? <Button type="button" onClick={handleNavigationToReservation}>View Reservation</Button>
            :<Button type="button" ><SignInButton /></Button>}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

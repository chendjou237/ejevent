/** 
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Ia0x482shAX
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
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"
import {  SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { auth, currentUser } from "@clerk/nextjs/server";
import { toast } from "sonner"
export async function NavBar() {
  const {userId} = auth()
  var isAdmin: boolean = false
  const admins = ['chenxhenor@gmail.com', 'Kenmoekendra@icloud.com', 'maivalaetitia@gmail.com']
  if(userId){
    const user = await currentUser()
    const email = user?.primaryEmailAddress?.emailAddress!
    isAdmin =  true
    // isAdmin =  admins.includes(email) ? true : false
   }
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white shadow dark:bg-gray-950">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span>EJ event Inc</span>
      </Link>
      <div className="flex items-center gap-4">
        { isAdmin ?(<Link href={'/dashboard'}><Button className="">My Dashboard</Button></Link>): null}
        <Link href={'/cart'}   className="rounded-full">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Link>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

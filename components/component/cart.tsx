/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0uhguhiV4ci
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { createBookings } from '@/app/actions'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCartBookings } from "@/contexts/CartBookingsContext"
import { Booking } from "@/utils/types"
import { useUser } from "@clerk/nextjs"
import { format } from 'date-fns'
import type { Metadata } from "next"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { JSX, SVGProps, useState } from "react"
import { toast } from "sonner"
import { SuccessDialog } from "./success-dialog"
export const metaData:Metadata = {
  title: "Cart",
  description: "Cart",
}
export function Cart() {
  
  const {cart, setCart} = useCartBookings()
  const [isCreatingBooking, setIsCreatingBooking] = useState(false)
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const handleAddR = () => { 
    router.push('/#decorations')
  }
    const {isLoaded, isSignedIn, user} = useUser()
    
      const [personalInfo, setPersonalInfo] = useState({
        name: user?.fullName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        contact: user?.primaryPhoneNumber?.phoneNumber || "",
      })

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }
  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo({ ...personalInfo, [field]: value })
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    toast.loading("Creating Booking")
    console.log("Personal Info:", personalInfo)
  const bookings =  cart.map((item) => {
      const booking: Booking = {
        id: undefined,
        user_id: user?.id,
        user_name: personalInfo.name,
        user_email: personalInfo.email,
        user_contact: personalInfo.contact,
        item_id: 1,
        item_name: item.name,
        item_image: item.name,
        start_at: item.start_at,
        end_at: item.end_at,
        status: "Pending",
      }
      console.log("Booking:", booking)
      return booking
    })
    console.log("Bookings:", bookings)
    setIsCreatingBooking(true)
  const response =  await createBookings(bookings)
  toast.dismiss()
  setIsCreatingBooking(false) 
    if(response.status === 'error'){
      toast.error(response.message)
  }
  if(response.status === 'success'){
    toast.success('Booking Successful')
    // setCart([])
    setIsSuccess(true)
    //router.push('/bookings')
  }
}
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className="container mx-auto py-8 md:py-12">
      <SuccessDialog open={isSuccess} setOpen={setIsSuccess}/>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-start gap-4 border rounded-lg p-4 bg-[#fbf1d7]">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-medium">${item.price}</span>
                  <Separator orientation="vertical" className="h-5" />
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    > 
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span>
                    Booking Date: {format(item.start_at, "HH:mm")} - {format(item.end_at, "HH:mm")}
                  </span>
                  <Separator orientation="vertical" className="mx-2" />
                  <span>
                    Time: {format(item.start_at, "HH:mm")} - {format(item.end_at, "HH:mm")}
                  </span>
                </div>
              </div>
              <Button size="icon" variant="ghost" onClick={() => handleRemoveItem(item.id)}>
                <XIcon className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
        <div className="space-y-6 ">
          <Card className='opacity-90'>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Decorations</span>
                <span>{total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Services</span>
                <span>{total}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAddR} className="w-full">Add resevations</Button>
            </CardFooter>
          </Card>
          <Card className='opacity-90'>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={personalInfo.contact}
                    onChange={(e) => handlePersonalInfoChange("contact", e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isCreatingBooking} className="w-full">
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

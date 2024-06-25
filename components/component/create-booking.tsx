/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/asizA8FDyvZ
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
'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useBookingDate } from '@/contexts/BookingDateContext'
import { useCartBookings } from "@/contexts/CartBookingsContext"
import { getBookingItem } from "@/server/queries"
import { formatDate } from 'date-fns'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { JSX, SVGProps } from "react"
import { toast } from "sonner"

const workingHours = [

]
export function CreateBooking() {
  const {startTime, endTime} = useBookingDate()
  const params = useParams()
  const {cart: cartItems, setCart: setCartItems} = useCartBookings() 
  const item = getBookingItem(params.id as  string)!
  const router = useRouter()
  const handleAddToCart = ()=> {
    try {
      setCartItems([...cartItems, { ...item, start_at:startTime, end_at:endTime, quantity: 1}])
      toast.success('Decoration added to cart')
      router.push('/cart')
      
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while adding item to cart')
    }
  }

  return (
    <div className="grid gap-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="grid gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Book Your Decoration Appointment</h2>
        <p className="text-muted-foreground">Select a date and time that works best for you.</p>
      </div>
      <div className="grid md:grid-cols-1 gap-8">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
       {/*      <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarDaysIcon className="mr-2 h-4 w-4 -translate-x-1" />
                  <span id="date-display">Select a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start"> */}
                <Calendar
                  mode="single"
                  className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                  onSelect={(date: any): void => {
                    const dateDisplay = new Date(date).toLocaleDateString()
                    document.getElementById("date-display")!.textContent = dateDisplay
                  }}
                />
          {/*     </PopoverContent>
            </Popover> */}
          </div>
        
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Booking</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-between flex-row">

              <div>
              <div className="flex items-center justify-between">
                <span>Scheduled date:</span>
                <span id="date-display"> {formatDate(startTime, 'MM/dd/yyyy')} </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Start at:</span>
                <span id="time-display">{startTime.toLocaleTimeString()} </span>
              </div>
              <div className="flex items-center justify-between">
                <span>End at:</span>
                <span id="time-display">{endTime.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Service:</span>
                <span id="service-display">{item?.name}</span>
              </div>
              <div className="flex items-center justify-between font-bold">
                <span>Price:</span>
                <span id="service-display">${item?.price}</span>
              </div>
              </div>

              <div className="">
                <Image src={item?.image?? './placeholder.jpg'} alt={item?.name ?? 'default'} width={200} height={200} />
              </div>

              </div>
              <Button  className="w-full" onClick={handleAddToCart}>
                  Add to cart
                </Button>
            </CardContent>
            <CardFooter className="flex justify-center items-center h-full">
            </CardFooter>
            
          </Card>
        </div>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

'use client'
import { deleteDecoration, editBooking, editDecoration } from "@/app/actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Booking, Decoration } from "@/utils/types"
import { SVGProps, useState } from "react"
import { toast } from "sonner"
interface Props {
  id: number
}
interface BookingProps {
  booking: Booking
}
export function DeleteDecoration({id}: Props) {
  const [isLoading, setLoading] = useState(false)
  const handleDelete= async (e:any) => {
    setLoading(true)
    toast.loading('deleting data...')
    const {message, error} = await deleteDecoration(id)
    toast.dismiss()
    setLoading(false)
    if(error){
      toast.error(message)
      console.error(error)
    }
    else{
      toast.success(message)
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"> <TrashIcon className="w-4 h-4" />
                     <span className="sr-only">Delete</span>
                     </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            Decoration and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant={isLoading? 'outline':'destructive'} disabled={isLoading} onClick={handleDelete}>{isLoading? 'Deleting...':'Delete'}</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export function ConfirmBookingDialog({booking}: BookingProps) {
  const [isLoading, setLoading] = useState(false)
  const handleConfirm= async (e:any) => {
    setLoading(true)
    toast.loading('Confimring Booking...')
    const {message, error} = await editBooking({...booking, status: 'confirmed'})
    toast.dismiss()
    setLoading(false)
    if(error){
      toast.error(message)
      console.error(error)
    }
    else{
      toast.success(message)
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"> <ConfirmIcon className="w-4 h-4" />
                     <span className="sr-only">Delete</span>
                     </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Booking?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently Mark as confirm your
            booking .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant={isLoading? 'outline':'default'} disabled={isLoading} onClick={handleConfirm}>{isLoading? 'Confirm...':'Confirm'}</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}



function ConfirmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
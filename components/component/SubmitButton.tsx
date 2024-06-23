import React from 'react'
import { Button } from "./../../components/ui/button"
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
   const { pending } = useFormStatus();  

  return (
   <Button disabled={pending} type='submit'>
   {pending ? 'Confirming reservation...' : 'Confirm Reservation'}

     Confirm Reservation

   </Button>
  )
}

'use client'

import { useParams } from "next/navigation"


export default function Bookings() {
   const params = useParams<{id:string}>()

  return (<center>{params.id}</center>)
  
}

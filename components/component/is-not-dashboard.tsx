'use client'
import {usePathname} from 'next/navigation'
import {ReactNode} from 'react'

export default function IsNotDashboard({children}: {children: ReactNode}) {
   const pathname = usePathname()
   if(!(pathname === 'dashboard')) {
    return (<div></div>);
   }   
  return (
    <>
    {children}
    </>
    
  )

}

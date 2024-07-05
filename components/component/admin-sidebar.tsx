import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { CalendarIcon, MountainIcon, SettingsIcon, SofaIcon, UsersIcon } from "@/lib/icons";
import { SVGProps } from "react";

export default function AdminSideBar({}) {
   return (<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
       <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
         <TooltipProvider>
           
           <Tooltip>
             <TooltipTrigger asChild>
               <Link href="/dashboard" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                 <CalendarIcon className="h-5 w-5" />
                 <span className="sr-only">Bookings</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">Bookings</TooltipContent>
           </Tooltip>
           <Tooltip>
             <TooltipTrigger asChild>
               <Link href="/dashboard/users" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                 <UsersIcon className="h-5 w-5" />
                 <span className="sr-only">Customers</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">Customers</TooltipContent>
           </Tooltip>
           <Tooltip>
             <TooltipTrigger asChild>
               <Link href="/dashboard/products" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                 <DecorationServiceIcon className="h-5 w-5" />
                 <span className="sr-only">Decorations</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">Decorations</TooltipContent>
           </Tooltip>
           <Tooltip>
             <TooltipTrigger asChild>
               <Link href="/dashboard/services" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                 <SofaIcon className="h-5 w-5" />
                 <span className="sr-only">Services</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">Services</TooltipContent>
           </Tooltip>
           <Tooltip>
             <TooltipTrigger asChild>
               <Link href="/dashboard/settings" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" prefetch={false}>
                 <SettingsIcon className="h-5 w-5" />
                 <span className="sr-only">Settings</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">Settings</TooltipContent>
           </Tooltip>
         </TooltipProvider>
       </nav>
     </aside>);
 }

 function DecorationServiceIcon(props: SVGProps<SVGSVGElement>) {
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
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

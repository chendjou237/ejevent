import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { CalendarIcon, MountainIcon, SettingsIcon, SofaIcon, UsersIcon } from "@/lib/icons";

export default function AdminSideBar({}) {
   return (<aside className="fixed inset-y-0 left-0 z-10 hidden w-14  flex-col border-r bg-background sm:flex">
       <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
         <TooltipProvider>
           <Link href="/" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" prefetch={false}>
             <MountainIcon className="h-4 w-4 transition-all group-hover:scale-110" />
             <span className="sr-only">Decor Booking</span>
           </Link>
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

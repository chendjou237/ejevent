import AdminSideBar from "@/components/component/admin-sidebar";
import { MountainIcon } from "@/lib/icons";
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import Link from "next/link"

export default function Layout   ({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>)  {
   const { has,  } = auth();
   const canAccessSettings = has({ role: "org:admin" });
  /*  if(!canAccessSettings) {
      redirect('/')
   }
 */
   return (
      <div className="flex min-h-screen  w-full flex-col bg-muted/40">
         <header className="sm:hidden sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Decor Booking</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Bookings
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Customers
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Settings
          </Link>
        </nav>
      </header>
      <div className="sm:space-x-20">
        <AdminSideBar />
         {children}
      </div>
      </div>
     
   );
}


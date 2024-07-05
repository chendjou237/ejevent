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
       
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/dashboard/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Bookings
          </Link>
          <Link href="/dashboard/users" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Customers
          </Link>
          <Link href="/dashboard/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="/dashboard/settings" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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


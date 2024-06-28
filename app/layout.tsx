import { Footer } from "@/components/component/footer";
import { NavBar } from "@/components/component/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import {CartBookingsProvider} from '../contexts/CartBookingsContext'
import AdminSideBar from "@/components/component/admin-sidebar";
import IsNotDashboard from "@/components/component/is-not-dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ejevent",
  description: "Elevate Your Space with Our Upcoming Decoration Reservation Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <CartBookingsProvider>
          <IsNotDashboard>
         <NavBar />
          </IsNotDashboard>
       
        {children}
        </CartBookingsProvider>
        <Footer />
      <Toaster />
      </body>
    </html>
    </ClerkProvider>

  );
}

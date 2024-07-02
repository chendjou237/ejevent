import { Footer } from "@/components/component/footer";
import IsNotDashboard from "@/components/component/is-not-dashboard";
import { NavBar } from "@/components/component/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartBookingsProvider } from '../contexts/CartBookingsContext';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ejevent.co"),
  title: {
    default: "EJ Event",
   template: `%s | EJ Event`,
  },
  openGraph: {
    description: "Elevate Your Space with Our Upcoming Decoration Reservation Service",
  },
  keywords: ["event", "decoration", "reservation", "space", "party", "wedding", "birthday", "anniversary", "baby shower", "bridal shower", "graduation", "engagement", "proposal", "corporate", "event planning", "event management", "event decoration", "event design", "event styling", "event coordination", "event setup", "event breakdown", "event cleanup", "event consultation", "event coordination", "event execution", "event production", "event logistics", "event vendor", "event supplier", "event rental", "event hire", "event booking", "event service", "event package", "event deal", "event discount", "event promotion", "event special", "event offer", "event sale", "event price", "event cost", "event budget", "event expense", "event investment", "event value", "event quality", "event satisfaction", "event experience", "event memory", "event moment", "event milestone", "event celebration", "event party", "event gathering", "event ceremony", "event reception", "event festival", "event fair", "event show", "event concert", "event performance", "event exhibition", "event conference", "event meeting", "event seminar", "event workshop", "event training", "event class", "event course", "event program", "event project", "event campaign", "event initiative", "event activity", "event event", "event occasion", "event function", "event happening", "event occurrence", "event incident", "event situation", "event circumstance", "event condition", "event environment", "event atmosphere", "event ambiance", "event vibe", "event spirit", "event energy", "event mood", "event tone", "event style", "event theme", "event concept", "event idea", "event vision", "event dream", "event goal", "event objective", "event mission", "event purpose", "event reason", "event cause", "event motivation", "event inspiration", "event aspiration", "event ambition", "event desire", "event wish", "event hope", "event expectation", "event anticipation", "event excitement", "event joy", "event happiness", "event satisfaction", "event fulfillment", "event success", "event achievement", "event accomplishment", "event progress", "event growth", "event development", "event improvement",],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className+ " min-h-screen bg-slate-100"}>
        <CartBookingsProvider>
          {/* <IsNotDashboard>
          </IsNotDashboard> */}
         <NavBar />
       
        {children}
        </CartBookingsProvider>
        <Footer />
      <Toaster />
      </body>
    </html>
    </ClerkProvider>

  );
}

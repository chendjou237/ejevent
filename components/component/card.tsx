'use client'
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import  Image  from "next/image";

export default function Card( {images, name, id, slug, description}: CardProps) {
   const router = useRouter()
   const onClick = (e: { preventDefault: () => void; }) => {
       e.preventDefault()
       router.push(`/decorations/${slug}`)
   }
   const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
   return (<div className="bg-[#fefae0] rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 w-60">
     <Link href="#" className="" prefetch={false}>
     <Carousel   opts={{
    align: "start",
    loop: true,
  }}
  plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
  >
  <CarouselContent className="">
    {images.slice(0,3).map((image, index) => (
      <CarouselItem key={index} className="pl-2 md:pl-4">
        <Image src={image} alt={name} width={700} height={400}  className=" h-48 object-cover"/>
      </CarouselItem>
    ))}
    
  </CarouselContent>
</Carousel>
     </Link>
     <div className="p-4">
       <h3 className="text-lg font-semibold mb-1">{name}</h3>
       <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
       <Button size="sm" onClick={onClick} className="w-full">
         Book
       </Button>
     </div>
   </div>);
 }

 interface CardProps {
    images: string[], 
    name: string,
    id: string,
    slug: string,
    description: string
   }

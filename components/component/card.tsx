'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Card( {image, name, id}: CardProps) {
   const router = useRouter()
   const onClick = (e: { preventDefault: () => void; }) => {
       e.preventDefault()
       router.push(`/decorations/${name}`)
   }
   return (<div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 w-52">
     <Link href="#" className="" prefetch={false}>
       <Image src={image} alt={`Decoration ${id}`} width={600} height={400} className="w-full h-48 object-cover" />
     </Link>
     <div className="p-4">
       <h3 className="text-lg font-semibold mb-1">{name}</h3>
       <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">2 h | Price based on project</p>
       <Button size="sm" onClick={onClick} className="w-full">
         Book
       </Button>
     </div>
   </div>);
 }

 interface CardProps {
    image: string, 
    name: string,
    id: string,
   }

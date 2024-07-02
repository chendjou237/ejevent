
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/4858E6aGjS5
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import { getServices } from "@/server/queries"

export async function AdminServices() {
   const services = await getServices()
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Decorations</h1>
        <Button size="sm">Add Decoration</Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
           {/*  <TableRow>
              <TableCell>
                <Image src="/placeholder.svg" alt="Decoration 1" width={80} height={80} className="rounded-md" />
              </TableCell>
              <TableCell>Floral Arch</TableCell>
              <TableCell>A beautiful floral arch perfect for weddings and events.</TableCell>
              <TableCell>$250</TableCell>
              <TableCell>
                <Badge variant="secondary">Available</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <FilePenIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <TrashIcon className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow> */}
          {services.map((service) => (
            <TableRow key={service.id}>
               <TableCell>
                  <Image src={service.image} alt={service.name} width={80} height={80} className="rounded-md" />
               </TableCell>
               <TableCell>{service.name}</TableCell>
               <TableCell>{service.description}</TableCell>
               <TableCell>${service.price}</TableCell>
               <TableCell>
                  <Badge variant="secondary">{service.status}</Badge>
               </TableCell>
               <TableCell>
                  <div className="flex items-center gap-2">
                     <Button size="icon" variant="outline">
                     <FilePenIcon className="w-4 h-4" />
                     <span className="sr-only">Edit</span>
                     </Button>
                     <Button size="icon" variant="outline">
                     <TrashIcon className="w-4 h-4" />
                     <span className="sr-only">Delete</span>
                     </Button>
                  </div>
               </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

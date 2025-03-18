import { AdminHome } from "@/components/component/admin-home"
import { getBookings } from "@/server/queries"

export default async function Page(){
   const data = await getBookings()
   return (
         <AdminHome data={data} />
)
}
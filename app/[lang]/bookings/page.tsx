import { Bookings } from "@/components/component/bookings";
import { getBookings } from "@/server/queries";
export default async  function page() {
  const data = await getBookings()
  return (
    <div><Bookings bookings={data!}/></div>
  )
}

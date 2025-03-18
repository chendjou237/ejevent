import { AdminProducts } from "@/components/component/admin-products";
import { getDecorations, getProducts } from "@/server/queries";

export default async function  page() {
  const data = await getProducts()
  return (
    <div><AdminProducts data={data} /></div>
  )
}

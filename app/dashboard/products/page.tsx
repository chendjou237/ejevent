import { Products } from "@/components/component/products";
import { getDecorations, getProducts } from "@/server/queries";

export default async function  page() {
  const data = await getProducts()
  return (
    <div><Products data={data} /></div>
  )
}

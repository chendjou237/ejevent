import { AdminServices } from "@/components/component/admin-services";
import { Products } from "@/components/component/products";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={(<center>Loading Conent...</center>)}><AdminServices /></Suspense>
  )
}

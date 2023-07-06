import Image from "next/image";
import { client } from "@/lib/client";
import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/utils/types";
import { title } from "process";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    product,
    category,
    group -> {
      name
    },
    price,
    image
  }`);
  return res;
};


export default async function Home() {
  const data: ProductTypes[] = await getProductData();
  //console.log(data);
  return (
<>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-x-10 gap-y-20">
         {data.map((product) => (
           <div key={product._id}>
             <ProductCard product={product} />
           </div>
         ))}
       </div>
      </>
  );
}
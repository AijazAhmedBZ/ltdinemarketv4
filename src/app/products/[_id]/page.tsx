import React from "react";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import { urlForImage } from "@/lib/image";

export default async function getProductsById({
  params,
}: {
  params: { _id: string };
}) {
  const data: ProductTypes[] = await ProductsData();
  const result = data.filter((product) => product._id === params._id);
  return (
    <div>
      <div>


        {result.map((product) => (
          <div key={product._id} className="flex gap-10" > 
            <Image
              src={urlForImage(product.image).url()}
              alt={product.product}
              width={370}
              height={394}
            />
<div>
            <h1 className="font-bold text-lg">{product.product}</h1>
            <h3 className="font-bold text-lg mt-3 text-gray-400">
              {product.category}
            </h3>
    <div className="flex gap-5 items-baseline"  >
            <AddToCart />
            <h3 className="font-bold text-lg">${product.price.toFixed(2)}</h3>
    </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

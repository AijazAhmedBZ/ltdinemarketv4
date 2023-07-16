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
          <div key={product._id}>
            <Image
              src={urlForImage(product.image).url()}
              alt={product.product}
              width={370}
              height={394}
            />
            <h3 className="font-bold text-lg">{product.product}</h3>
            <h3 className="font-bold text-lg mt-3 text-gray-400">
              {product.category}
            </h3>
            <h3 className="font-bold text-lg">${product.price.toFixed(2)}</h3>
            <AddToCart />
          </div>
        ))}
      </div>
    </div>
  );
}

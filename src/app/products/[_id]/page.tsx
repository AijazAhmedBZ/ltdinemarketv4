import React from "react";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";
import Image from "next/image";
import CartInteraction from "@/components/AddToCart2";
import { urlForImage } from "@/lib/image";

const sizes = ["XS", "S", "M", "L", "XL"];

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
          <div key={product._id} className="flex gap-10">
            <Image
              src={urlForImage(product.image).url()}
              alt={product.product}
              width={370}
              height={394}
            />
            <div className="h-full">
              <h1 className="font-bold text-[26px]">{product.product}</h1>
              <h2 className="font-bold text-lg mt-3 text-gray-400">
                {product.category}
              </h2>

              <div className="mt-20 text-[13] font-bold">SELECT SIZE</div>
              <div className="flex gap-x-3 mt-2">
                {sizes.map((size) => {
                  return (
                    <div
                      key={sizes[0]}
                      className="w-[42px] h-[42px] duration-300 border rounded-full hover:shadow-xl mt-2 text-base font-bold center "
                    >
                      <span>{size}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-5 items-baseline mt-7">
                <CartInteraction />
                <h3 className="font-bold text-2xl">
                  ${product.price.toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

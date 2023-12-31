import React from "react";
import { ProductsData } from "@/utils/sanity_data";
import { ProductTypes } from "@/utils/product_types";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import { urlForImage } from "@/lib/image";
import { Image as Img } from "sanity";
import CartCounter from "@/components/CartCounter";

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
              src={urlForImage(product.image as unknown as Img).url()}
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
              <div className="flex justify-evenly mt-3">
                <p className="pt-3">Quantity:</p>
                <CartCounter />
              </div>
              <div className="flex gap-5 items-baseline mt-7">
                <AddToCart _id={params._id} />
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

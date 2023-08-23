"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { ProductTypes } from "@/utils/types";
import { Button } from "./ui/button";
import { FC } from "react";
import toast from "react-hot-toast";

const ProductCard2: FC<ProductTypes> = (products: ProductTypes) => {
  const handleAddToCart = async () => {
    const res = await fetch("api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: products._id,
      }),
    });
    const result = await res.json();
    console.log(result);
    toast.success("Product Add 2to Cart Successfully")
  };

  return (
    <div>
      {" "}
      <div className="mt-10">
        <Link href={`/products/${products._id}`}>
          <Image
            src={urlForImage(products.image).url()}
            alt={products.product}
            width={370}
            height={394}
          />
        </Link>
        <h3 className="font-bold text-lg">{products.product}</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 ">
          {products.category}
        </h3>
        <h3 className="font-bold text-lg">${products.price.toFixed(2)}</h3>

        <Button
          onClick={handleAddToCart}
          className="text-white rounded-lg mt-4 "
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard2;

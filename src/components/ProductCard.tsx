import React from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { ProductTypes } from "@/utils/product_types";
import { urlForImage } from "@/lib/image";
import { Image as img } from "sanity";

const ProductCard = (products: ProductTypes) => {
  return (
    <Link href={`/products/${products._id}`}>
      <div className="mt-10">
        <Image
          src={urlForImage(products.image as unknown as img).url()}
          alt={products.product}
          width={370}
          height={394}
        />
        <h3 className="font-bold text-lg">{products.product}</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 ">
          {products.category}
        </h3>
        <h3 className="font-bold text-lg">${products.price.toFixed(2)}</h3>
        <AddToCart _id={products._id} />
      </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";
import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { ProductTypes } from "@/utils/types";
import { urlForImage } from "@/lib/image";

const ProductCard = (products:ProductTypes) => {
  return (
    <Link href={`/products/${products._id}`}>
      <div className="mt-10">
        <Image src={urlForImage(products.image).url()} alt={products.product} width={370} height={394}  />
        <h3 className="font-bold text-lg">{products.product}</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 ">
          {products.category}
        </h3>
        <h3 className="font-bold text-lg">${products.price}</h3>
        <AddToCart />
      </div>
    </Link>
  );
};

export default ProductCard;

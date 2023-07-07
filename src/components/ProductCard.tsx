import React from "react";
import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { ProductTypes } from "@/utils/types";

const ProductCard = (props:ProductTypes) => {
  return (
    <Link href={`/products/${props._id}`}>
      <div className="mt-10">
        <Image src={props.image} alt="product" />
        <h3 className="font-bold text-lg">{props.product}</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 ">
          {props.category}
        </h3>
        <h3 className="font-bold text-lg">${props.price}</h3>
        {/* <h3 className="font-bold text-lg">{props.group.name}</h3> */}
        <AddToCart />
      </div>
    </Link>
  );
};

export default ProductCard;

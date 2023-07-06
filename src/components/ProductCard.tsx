import React from "react";
import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";

const ProductCard = (props: {
  _id: string;
  title: string;
  category: string;
  group: string;
  price: number;
  image: string | StaticImageData;
}) => {
  return (
    <Link href={`/products/${props._id}`}>
      <div className="mt-10">
        <Image src={props.image} alt="product" />
        <h3 className="font-bold text-lg">{props.title}</h3>
        <h3 className="font-bold text-lg mt-3 text-gray-400 ">
          {props.category}
        </h3>
        <h3 className="font-bold text-lg">${props.price}</h3>
        <AddToCart />
      </div>
    </Link>
  );
};

export default ProductCard;

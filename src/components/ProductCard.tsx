import React from "react";
import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";

const ProductCard = (props: {
  title: string;
  category: string;
  price: number;
  img: StaticImageData;
}) => {
  return (
    <div className="mt-10" >
      <Image src={props.img} alt="product" />
      <h3 className="font-bold text-lg">{props.title}</h3>
      <h3 className="font-bold text-lg mt-3 text-gray-400 ">
        {props.category}
      </h3>
      <h3 className="font-bold text-lg">${props.price}</h3>
      <AddToCart/>
    </div>
  );
};

export default ProductCard;

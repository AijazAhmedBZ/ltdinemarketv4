import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

const ProductCard = (props: {
  title: string;
  category: string;
  price: number;
  img: StaticImageData;
}) => {
//   {
//     /* <Link href={`/products/${props.id}`} */
//   }
  return (
    <div>
      <Image src={props.img} alt="product" />
      <h3 className="font-bold text-lg">{props.title}</h3>
      <h3 className="font-bold text-lg mt-3 text-gray-400 ">
        {props.category}
      </h3>
      <h3 className="font-bold text-lg">${props.price}</h3>
      <Button className="text-white rounded-lg mt-4 ">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;

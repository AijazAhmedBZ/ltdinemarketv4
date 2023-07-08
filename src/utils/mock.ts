import { ProductTypes } from "./types";
import P1 from "public/1-brushed-raglan-sweatshirt.png";
import P10 from "public/10-brushed-bomber.png";
import P3 from "public/3-flex-sweatshirt.png";

import { client } from "@/lib/client";

// export const ProductsData: ProductTypes[] = [
//   {
//     _id: "id-1",
//     product: "Brushed Raglan Sweatshirt",
//     category: "Long Dress",
//     group:{name:"women"} ,
//     price: 195,
//     image: P1,
//   },
//   {
//     _id: "id-2",
//     product: "Brushed Bomber",
//     category: "Jacket",
//     group: {name:"men"},
//     price: 225,
//     image: P10,
//   },
//   {
//     _id: "id-3",
//     product: "Flex Sweatshirt",
//     category: "Long Dress",
//     group: {name:"kids"},
//     price: 175,
//     image: P3,
//   },
// ];

export const ProductsData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    product,
    category,
    group -> {
      name
    },
    price,
    image
  }`);
  return res;
};

// export default async function Home() {
//   const data: ProductTypes[] = await ProductsData();
  // console.log(data);
// }

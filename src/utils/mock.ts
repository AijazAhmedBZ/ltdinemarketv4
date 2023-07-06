import { ProductTypes } from "./types";
import P1 from "public/1-brushed-raglan-sweatshirt.png";
import P10 from "public/10-brushed-bomber.png";
import P3 from "public/3-flex-sweatshirt.png";

export const ProductsData: ProductTypes[] = [
  {
    _id: "id-1",
    title: "Brushed Raglan Sweatshirt",
    category: "Long Dress",
    group: "women",
    price: 195,
    image: P1,
  },
  {
    _id: "id-2",
    title: "Brushed Bomber",
    category: "Jacket",
    group: "men",
    price: 225,
    image: P10,
  },
  {
    _id: "id-3",
    title: "Flex Sweatshirt",
    category: "Long Dress",
    group: "kids",
    price: 175,
    image: P3,
  },
];
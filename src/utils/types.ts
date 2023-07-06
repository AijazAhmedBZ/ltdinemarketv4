import { StaticImageData } from "next/image";
export type ProductTypes = {
  _id: string;
  title: string;
  category: string;
  group:string;
  price: number;
  image: string | StaticImageData;
};

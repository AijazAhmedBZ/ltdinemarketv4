import { StaticImageData } from "next/image";
export type ProductTypes = {
  _id: string;
  product: string;
  category: string;
  group: { name: string };
  price: number;
  image: string | StaticImageData;
};

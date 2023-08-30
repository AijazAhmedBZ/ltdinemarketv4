import { ProductTypes } from "./product_types";
import { client } from "@/lib/client";

export const ProductsData = async () => {
  const res: ProductTypes[] = await client.fetch(`*[_type=="product"]{
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

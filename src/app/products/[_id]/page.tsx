import React from "react";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

export default async function getProductsById(_id: string) {
    const data: ProductTypes[] = await ProductsData();
    const result = data.filter((product) => product._id === _id);
    const getProductsById = result.filter((product) => product._id === _id)
  return (
    <div>

        <div>Aijaz</div>
      {/* {result.map((products) => (
        <div key={products._id}>
          <div>{products.product}</div>
        </div>
      ))} */}
    </div>
  );
}

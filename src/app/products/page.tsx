import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";
import ProductCard2 from "@/components/ProductCard2";

const AllProducts = async () => {
  const data: ProductTypes[] = await ProductsData();
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid md:grid-cols-2 md:gap-x-10 lg:grid lg:grid-cols-4 lg:gap-x-10">
      {data.map((products) => (
        <div >
        <ProductCard2 
          key={products._id}
          _id={products._id}
          product={products.product}
          category={products.category}
          group={products.group}
          price={products.price}
          image={products.image}
        /></div>
      ))}
    </div>
  );
}

export default AllProducts;

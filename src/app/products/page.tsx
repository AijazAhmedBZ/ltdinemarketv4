import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";

const AllProducts = async () => {
  const data: ProductTypes[] = await ProductsData();
  return (
    <div>
      {data.map((products) => (
        <ProductCard
          key={products._id}
          _id={products._id}
          product={products.product}
          category={products.category}
          group={products.group}
          price={products.price}
          image={products.image}
        />
      ))}
    </div>
  );
}

export default AllProducts;

import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/sanity_data";
import { ProductTypes } from "@/utils/product_types";

async function ProductList() {
  const data: ProductTypes[] = await ProductsData();
  const productsChunks = data.slice(0, 3);
  return (
    <div className="flex gap-x-10 justify-around">
      {productsChunks.map((products) => (
        <ProductCard
          key={products._id}
          _id={products._id}
          image={products.image}
          product={products.product}
          category={products.category}
          group={products.group}
          price={products.price}
        />
      ))}
    </div>
  );
}

export default ProductList;

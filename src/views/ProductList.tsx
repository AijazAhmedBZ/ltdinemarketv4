import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";

const ProductList = () => {
  // const productsChunks = ProductsData.slice(0,3);

  return (
    <div>

    </div>
    // <div className="flex gap-x-10 justify-around">
    //   {productsChunks.map((products:ProductTypes) => (
    //     <ProductCard
    //       key={products._id}
    //       _id={products._id}
    //       image={products.image}
    //       product={products.product}
    //       category={products.category}
    //       group={products.group}
    //       price={products.price}
    //     />
    //   ))}
    // </div>
  );
};

export default ProductList;
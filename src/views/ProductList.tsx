import React from "react";
import Image from "next/image";
import P1 from "public/1-brushed-raglan-sweatshirt.png";
import P10 from "public/10-brushed-bomber.png";
import P3 from "public/3-flex-sweatshirt.png";
import ProductCard from "@/components/ProductCard";
const ProductList = () => {
  return (
    <div className="flex gap-x-10 justify-around">
      <ProductCard
        title="Brushed Raglan Sweatshirt"
        category="Long Dress"
        price={195}
        img={P1}
      />
      <ProductCard
        title="Brushed Bomber"
        category="Jacket"
        price={225}
        img={P10}
      />
      <ProductCard
        title="Flex Sweatshirt"
        category="Long Dress"
        price={175}
        img={P3}
      />
    </div>
  );
};

export default ProductList;

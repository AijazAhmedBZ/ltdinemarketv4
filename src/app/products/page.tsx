import React from 'react'
import ProductCard from '@/components/ProductCard'
import { ProductsData } from '@/utils/mock';
import { ProductTypes } from '@/utils/types';
const AllProducts = () => {
    
    return (
    <div className="flex gap-x-10 justify-around">
    {ProductsData.map((products:ProductTypes) => (
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
  )
}

export default AllProducts
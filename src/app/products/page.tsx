import React from 'react'
import ProductCard from '@/components/ProductCard'
import { ProductsData } from '@/utils/mock';
const AllProducts = () => {
    
    return (
    <div className="flex gap-x-10 justify-around">
    {ProductsData.map((products) => (
      <ProductCard
        key={products._id}
        _id={products._id}
        title={products.title}
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
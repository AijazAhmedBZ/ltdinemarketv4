"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

const CartCounter2 = () => {
  const [cartCount, setCart] = useState(0);

  const increment = () => {
    setCart(cartCount + 1);
  };

  const decrement = () => {
    if (cartCount) setCart(cartCount - 1);
  };

  return (
    <div className="flex justify-center items-baseline gap-5">
      <button
        className="w-[42px] h-[42px] duration-300 border rounded-full hover:shadow-xl mt-2 text-base font-bold center"
        onClick={decrement}
      >
        -
      </button>
      <div>{cartCount}</div>
      <button
        className="w-[42px] h-[42px] duration-300 border rounded-full hover:shadow-xl mt-2 text-base font-bold center"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

const AddToCart2 = ({ onAdd }) => {
  const addProduct = () => {
    onAdd();
    toast.success('Product added to cart');
  };

  return (
    <div>
      <Button onClick={addProduct} className="text-white rounded-lg mt-4">
        Add to Cart
      </Button>
    </div>
  );
};

const CartInteraction = () => {
  const handleAddToCart = () => {
    // Implement any logic related to adding to the cart here
    // For now, just increment the cart count
    // You can implement a proper cart management mechanism
    // using context or state management libraries.
  };

  return (
    <div>
      <CartCounter2 />
      <AddToCart2 onAdd={handleAddToCart} />
    </div>
  );
};

export default CartInteraction;

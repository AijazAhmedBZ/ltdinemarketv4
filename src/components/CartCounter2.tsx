"use client";
import { useState } from "react";

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
export default CartCounter2;

"use client";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";

const CartCounter = () => {
  const dispatch = useDispatch();

  const cartCounterValue = useSelector(
    (state: RootState) => state.cartSlice.value
  );

  const increment = () => {
    dispatch(counterActions.addToCart());
  };
  const decrement = () => {
    dispatch(counterActions.removeFromCart());
  };
  return (
    <div className="flex gap-5">
      <button onClick={}>-</button>
      <div>{cartCounterValue}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default CartCounter;

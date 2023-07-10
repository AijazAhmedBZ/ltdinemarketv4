"use client";

import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast"
const AddToCart = () => {
  const dispatch = useDispatch();
const addProduct=() =>{
  dispatch(cartActions.addToCart({quantity:1}))
toast.success("Product Add to Cart Successfully")
}
  return (
    <div>
      <Button onClick={addProduct} className="text-white rounded-lg mt-4 ">Add to Cart</Button>
    </div>
  );
};

export default AddToCart;

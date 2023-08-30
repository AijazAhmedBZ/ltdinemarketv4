"use client";

import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const AddToCart = ({ _id }: { _id: string }) => {
  const dispatch = useDispatch();
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const addProduct = async () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
    const res = await fetch(`/api/cart/${_id}`, {
      method: "POST",
      body: JSON.stringify({
        product_id: _id,
        quantity: cartValue,
      }),
    });
    toast.success("Product Add to Cart Successfully");
  };
  return (
    <div>
      <Button onClick={addProduct} className="text-white rounded-lg mt-4 ">
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;

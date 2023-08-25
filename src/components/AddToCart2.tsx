"use client";

import { Button } from "./ui/button";
import toast from "react-hot-toast";
import CartCounter2 from "./CartCounter2";
const AddToCart2 = () => {
  const addProduct = () => {
    <CartCounter2 />;
    toast.success("Product is not yet added");
  };
  return (
    <div>
      <Button onClick={addProduct} className="text-white rounded-lg mt-4 ">
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart2;

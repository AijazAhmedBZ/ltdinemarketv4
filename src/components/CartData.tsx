import React from "react";
import { cartTypes } from "@/lib/drizzle";
import { cookies } from "next/headers";

const getCartData = async () => {
  cookies().get("user_id")?.value;
  try {
    const res = await fetch(
      `http://localhost:3000/api/cart?user_id=${
        cookies().get("user_id")?.value
      }`,
      { credentials: "include" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const result = await res.json();
    return result;
  } catch (err) {
    // console.log(err);
  }
};
const CartData = async () => {
  const data: cartTypes[] = await getCartData();
console.log(data)

  return (
    <>
      {/* {data[0].id} */}
    </>
  );
};

export default CartData;

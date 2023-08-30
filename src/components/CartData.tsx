import React from "react";
import { cartTypes } from "@/lib/drizzle";
import { cookies } from "next/headers";

const getCartData = async () => {
  cookies().get("user_id")?.value;
  const res = await fetch(
    `http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`,
    { credentials: "include" }
  );
  return res.json();
};

export default async function CartData() {
  const data: { res: cartTypes[] } = await getCartData();
  return (
    <>
      {data.res.map((cart) => {
        return (
          <div key={cart.id}>
            <ul>
              <li>ID: {cart.id}</li>
              <li>User ID: {cart.user_id}</li>
              <li>Product ID: {cart.product_id}</li>
              <li>Quantity: {cart.quantity}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

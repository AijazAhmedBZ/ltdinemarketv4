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
  const data: {res:cartTypes[]} = await getCartData();

  // console.log(data);
  // console.log(data.res);
  // console.log(typeof data);
  return (
    <>
      {data.res.map((cart) => {
        return <div key={cart.id}>{cart.quantity}</div>;
      })}
    </>
  );
}

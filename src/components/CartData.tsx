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
  const {data} = await getCartData();

  console.log(data);
  return (
    <>
      {data.map((t) => {
        return <div key={t.id}>{t.quantity}</div>;
      })}
    </>
  );
}

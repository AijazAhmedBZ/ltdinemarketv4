import { cartTable } from "@/lib/drizzle";
import { ProductTypes } from "@/utils/types";
import { PgTable } from "drizzle-orm/pg-core";
import { cookies } from "next/headers";

const getDataFromCart = async () => {
// //   const uid = cookies().get("user_id")?.value as string;
// //   const getUid = await fetch(
// //     `http//localhost:3000/api/cart?"user_id"${cookies().get("user_id")?.value}`
//   );
console.log(cartTable)
  try {
    const res = await fetch("http://127.0.0.1:3000/api/cart", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (err) {
    console.log("err",err);
  }
};


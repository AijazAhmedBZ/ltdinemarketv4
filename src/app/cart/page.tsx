import CartData from "@/components/CartData";

export default async function Page() {
return(
  <>
  <div>
    {/* @ts-ignore */}
    <CartData/>
  </div>
  </>
)
}


// import { cartTable, cartTypes } from "@/lib/drizzle";
// import { ProductTypes } from "@/utils/types";
// import { cookies } from "next/headers";
// import { NextRequest } from "next/server";

// export default async function Page() {
//   cookies().get("user_id")?.value as string;
//   fetch(
//     `http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`,
//     { credentials: "include" }
//   );
//   const getCartData = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:3000/api/cart", {
//         method: "GET",
//         cache: "no-store",
//       });
//       if (!res.ok) {
//         throw new Error("Faild to fetch data");
//       }
//       const result = await res.json();
//       return result;
//     } catch (err) {
//       console.log(getCartData);
//       console.log(err);
//     }
//   }
//     const CartData = async () => {
//       const cartData:cartTypes[] =await getCartData()
//     console.log(cartData)
//   return <div>
//     Aeb to aa ja</div>;
// }

// };


import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const user_id = cookies().get("user_id")?.value as string;

if (!user_id) {
    const setCookies = cookies();
    setCookies.set("user_id", uid);
  }
  
  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: user_id as string,
      })
      .returning();

    return NextResponse.json({ res });
  } catch (error) {}
  return NextResponse.json({ message: "Somthing Went Wrong" });
};


export const GET = async (request: NextRequest) => {
  
cookies().get("user_id")?.value as string;

const getCookies = cookies()
  
console.log(getCookies)

  fetch(
    `http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`,{credentials:"include"}
  );
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));

    return NextResponse.json({ res });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

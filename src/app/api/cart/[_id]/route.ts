import { NextRequest, NextResponse } from "next/server";
import { cartTable, cartTypes, insertCartTypes, db } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const user_id = cookies().get("user_id")?.value as string;
  console.log("USER_ID POST", user_id);

  const uid = uuid();
  if (!user_id) {
    const setCookies = cookies();
    setCookies.set("user_id", uid);
  }
  try {
    const res: insertCartTypes[] = await db
      .insert(cartTable)
      .values({
        user_id: user_id as string,
        product_id: req.product_id,
        quantity: req.quantity,
      })
      .returning();

    return NextResponse.json({
      res,
      message: "Item added successfully",
    });
  } catch (error) {}
  return NextResponse.json({ message: "Somthing Went Wrong" });
};

const user_id = await fetch(
  `http://127.0.0.1:3000/api/cart/?user_id=${cookies().get("user_id")?.value}`
);
export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  console.log("USER_ID GET", uid);
  try {
    const res: cartTypes[] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    return NextResponse.json({ res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

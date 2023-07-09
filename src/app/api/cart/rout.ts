import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
export const GET = async (request: Request) => {
  try {
    const res = await db.select().from(cartTable);
    // res[0].product_id
    // console.log(res)
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

export const POST = async (request: Request) => {
  const req = await request.json();
  try {
    const res = await db.insert(cartTable).values({
      product_id: req.product_id,
      quantity: 1,
      user_id: "",
    });
    return NextResponse.json({ res });
  } catch (error) {}
};

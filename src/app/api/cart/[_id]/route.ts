import { NextRequest, NextResponse } from "next/server";
import { cartTable, insertCartTypes, db } from "@/lib/drizzle";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res: insertCartTypes[] = await db
      .insert(cartTable)
      .values({
        user_id: req.user_id,
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

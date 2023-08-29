import { NextRequest, NextResponse } from "next/server";
import { cartTable, cartTypes, insertCartTypes, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;

  try {
    const res = await db.delete(cartTable)
    .where(eq(cartTable.user_id, uid));
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

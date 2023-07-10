import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  cookies().get("user_id")?.value as string;

  fetch(
    `http://localhost:3000/cart?user_id=${cookies().get("user_id")?.value}`
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
    //  console.log(error);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

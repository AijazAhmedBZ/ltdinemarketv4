import { NextRequest, NextResponse } from "next/server";
import { cartTable, cartTypes, insertCartTypes, db } from "@/lib/drizzle";
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
    const res:insertCartTypes[] = await db
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
  const req = request.nextUrl;
  // console.log("req", req);
  const uid = req.searchParams.get("user_id") as string;
  // console.log("GET Api from route uid", uid);

  try {
    // console.log("After try GET Api from route uid", uid);
    const res:cartTypes[] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    console.log(res[0].id);

    // console.log("again try GET Api from route uid", uid);
    // console.log("res", res);
    return NextResponse.json({ res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  // const uid = cookies().get("user_id")?.value as string
  // console.log(uid)
  // // console.log("req", req);
  // // console.log("DELETE Api uid", uid);

  try {
    const res = await db.delete(cartTable).where(eq(cartTable.user_id, uid));
    // .from(cartTable)
    // .where(eq(cartTable.user_id, uid));

    return NextResponse.json({ res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ message: "Somthing Went Wrong" });
  }
};

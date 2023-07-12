import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const user_id = cookies().get("id")?.value as string;
  console.log(req)
  // console.log('before condition',user_id)
  // if(cookies().has('user_id'))
  // console.log('has',cookies().has('user_id'))
  if (!user_id) {
    const setCookies = cookies();
    // localStorage.setItem('user_id',uid)
    setCookies.set('id',uid)
    
    console.log('uid if',uid)
    // console.log('AFTER condition',user_id)
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: uid,
      })
      .returning();

    return NextResponse.json({ res:'hello' });
  } catch (error) {
    return NextResponse.json({status:500,message:'server error'})
  }
};

export const GET = async (request: NextRequest) => {
  // cookies().get("user_id")?.value as string;

  // const getCookies = cookies().get('id')?.value as string;

  // console.log("cookies", getCookies);

  // fetch(
  //   `http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`
  // );
  const req = request.nextUrl;
  const uid = req.searchParams.get("id") as string;
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

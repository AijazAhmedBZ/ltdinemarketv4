import CartData from "@/components/CartData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div>
        {/* @ts-ignore */}
        <CartData />
      </div>
      <div>
        <Link href={"/checkout"}>
          <Button>Proceed to Checkout</Button>
        </Link>
      </div>
    </>
  );
}

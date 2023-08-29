
import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import { ShoppingCart, Search, AlignJustify } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cookies } from "next/headers";

async function Header() {
  const user_id = cookies().get("user_id")?.value
  const cartValue = async () => {
      try { 
        const res = await fetch(`http://127.0.0.1:3000/api/cart/${user_id}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Faild to fetch data");
        }
        const result = await res.json();
        return result;
      } catch (err) {
        console.log(err);
      }
    };
  console.log("CART VALUE",await cartValue())
    return (
    <div className="flex justify-between flex-col lg:flex-row items-center py-6 px-20 ">
      <Link href={"/"}>
        <Image src={logo} alt="dinemarket" className="w-40"></Image>
      </Link>
      <div className="flex justify-between flex-col lg:flex-row items-center py-6 px-20">
        <ul className="flex gap-x-10 flex-col lg:flex-row">
          <li className="text-lg">
            <Link href={"/women"}>Women</Link>
          </li>
          <li className="text-lg">
            <Link href={"/men"}>Men</Link>
          </li>
          <li className="text-lg">
            <Link href={"/kids"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href={"/products/"}>All Products</Link>
          </li>
        </ul>
        <div className="flex justify-between gap-2 ml-10">
          <div className="border rounded-lg flex gap-2 items-center text-gray-600 px-2">
            <Search />
            <Input
              type="text"
              className="pr-5 py-1 border-white"
              placeholder="What are you looking for"
            />
          </div>
          <div className="relative flex justify-center items-center h-10 w-10 rounded-full bg-gray-300">
            <span className="absolute top-0 right-0 bg-red-400 text-xs font-light rounded-full w-4 h-4 flex justify-center items-center">
              {/* {cartValue} */}
            </span>
            <ShoppingCart className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden" >
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex gap-x-10 flex-col lg:flex-row">
              <li className="text-lg">
                <Link href={"/women"}>Women</Link>
              </li>
              <li className="text-lg">
                <Link href={"/men"}>Men</Link>
              </li>
              <li className="text-lg">
                <Link href={"/kids"}>Kids</Link>
              </li>
              <li className="text-lg">
                <Link href={"/products/"}>All Products</Link>
              </li>
            </ul>
            <div className="border rounded-lg flex gap-2 items-center text-gray-600 px-2">
              <Search />
              <Input
                type="text"
                className="pr-5 py-1 border-white"
                placeholder="What are you looking for"
              />
            </div>
            <div className="relative flex justify-center items-center h-10 w-10 rounded-full bg-gray-300">
              <span className="absolute top-0 right-0 bg-red-400 text-xs font-light rounded-full w-4 h-4 flex justify-center items-center">
                {/* {cartValue} */}
              </span>
              <ShoppingCart className="h-6 w-6" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
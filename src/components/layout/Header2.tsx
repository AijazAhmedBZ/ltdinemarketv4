"use client";

import React, { useState } from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import { ShoppingCart, Search, AlignJustify } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function Header() {
  // const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const [cartValue, setCartValue] = useState(0);
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
              {cartValue}
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
                {cartValue}
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

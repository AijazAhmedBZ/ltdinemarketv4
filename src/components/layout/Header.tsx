import React from "react";
import logo from "/public/logo.webp"
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
function Header() {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center py-6 px-20 ">
      <Link href={"/"}>
        <Image src={logo} alt="dinemarket" className="w-40"></Image>
      </Link>
      <ul className="flex gap-x-10 flex-col lg:flex-row">
        <li className="text-lg">
          <Link href={"/category/women"}>Women</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/men"}>Men</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/all_products"}>All Products</Link>
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
        <div className="absolute top-0 right-0 bg-red-400 text-xs font-light rounded-full w-4 h-4 flex justify-center items-center">
          3
        </div>
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Header;
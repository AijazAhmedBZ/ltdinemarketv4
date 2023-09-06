"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { cartTypes } from "@/lib/drizzle";

export default function CartData() {
  const [products, setProducts] = useState<any>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn, refresh]);

  async function handleDelete(product_id: string) {
    const res = await fetch(`/api/cart?user_id=${userId}`, {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_id: product_id,
      }),
    });
    toast.success("Item Removed Successfully");
    setRefresh(!refresh);
  }
  return (
    <>
      {isSignedIn ? (
        <div>
          {products?.res.map((cart:cartTypes) => {
            return (
              <div key={cart.id}>
                <ul className="flex gap-4">
                  <li>ID: {cart.id}</li>
                  <li>User ID: {cart.user_id}</li>
                  <li>Product ID: {cart.id}</li>
                  <li>Quantity: {cart.quantity}</li>
                  {/* <li>Total Quantity: {cart.quantity * cart.quantity}</li> */}
                  <li>
                    <div>
                      <Button onClick={() => handleDelete(cart.product_id)}>
                        Remove Item
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Please Sign In First...</div>
      )}
    </>
  );
}

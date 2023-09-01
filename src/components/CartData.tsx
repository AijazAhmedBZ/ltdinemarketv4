"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function CartData() {
  const [products, setProducts] = useState<any>(null);
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isSignedIn]);

  async function handleDelete() {
    const res = await fetch(`/api/cart?user_id=${userId}`, {
      method: "DELETE"
    });
    toast.success("Cart Empty Successfully");
    console.log("DELETE", userId);
  }
  return (
    <>
      {isSignedIn ? (
        <div>
          {products?.res.map((cart) => {
            return (
              <div key={cart.id}>
                <ul>
                  <li>ID: {cart.id}</li>
                  <li>User ID: {cart.user_id}</li>
                  <li>Product ID: {cart.product_id}</li>
                  <li>Quantity: {cart.quantity}</li>
                  <li>Total Quantity: {cart.quantity * cart.quantity}</li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Please Sign In First...</div>
      )}
      <div>
        <Button onClick={() => handleDelete()}>Empty Cart</Button>
      </div>
    </>
  );
}

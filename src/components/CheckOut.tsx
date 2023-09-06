"use client";

import getStripePromise from "@/lib/stripe";
import { Button } from "./ui/button";

const products = [
  {
    product: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
  },
  {
    product: 2,
    name: "2nd Product",
    price: 100,
    quantity: 1,
  },
];

const Checkout = () => {
  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    console.log("STRIPE PROMISE",stripe)
    const res = await fetch("/api/strip-session", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({ products }),
    });
    const data = await res.json();
    console.log("DATA", data);
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
    console.log("NO DATA SESSION", data.session);
  };
  return (
    <div>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Checkout;

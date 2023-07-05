import React from "react";
import Image from "next/image";
import jewelleryImage from "public/jewellery.png";
import { Button } from "@/components/ui/button";
const JewellerySection = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="flex justify-end">
          <div className="text-4xl font-bold">
            <p>Unique and Authentic</p>
            <p>Vintage Designer</p>
            <p>Jewellery</p>
          </div>
        </div>
        <div className="flex mt-10 items-center justify-around ">
          <div>
            <div className="flex">
              <div>
                <p className="text-base font-semibold w-48 h-10">
                  Using Good Quality Materials
                </p>
                <p className="mt-3 w-48 h-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ml-7">
                <p className="text-base font-semibold w-48 h-10">
                  100% Handmade Products
                </p>
                <p className="mt-3 w-48 h-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="text-base font-semibold w-48 h-10 mt-10">
                  Modern Fashion Design
                </p>
                <p className="mt-3 w-48 h-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ml-7">
                <p className="text-base font-semibold w-48 h-10 mt-10">
                  Discount for Bulk Orders
                </p>
                <p className="mt-3 w-48 h-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={jewelleryImage}
              alt="jewelleryImage"
              className="ml-28"
            />
          </div>
          <div>
            <div className="ml-10 w-[282px] text-justify font-light text-sm">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </div>
            <div className="ml-10 mt-10">
              <Button>See All Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewellerySection;

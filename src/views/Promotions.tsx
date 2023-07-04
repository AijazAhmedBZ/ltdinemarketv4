import Image from "next/image";
import promo1 from "public/promotion1.png";
import promo2 from "public/promotion2.png";
import promo3 from "public/promotion3.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Promotions = () => {
  return (
    <section className="mt-10">
      <h1 className="flex justify-center text-blue-700 text-sm font-bold">
        PROMOTIONS
      </h1>
      <p className="mt-5 flex justify-center text-3xl font-bold">
        Our Promotions Events
      </p>
      <div className="flex">
        <div>
          <div className="mt-10 bg-[#D6D6D8] flex items-center">
            <div className="px-10">
              <p className="text-2xl font-bold">
                GET UP TO <span className="text-3xl font-extrabold">60%</span>
              </p>
              <p className="mt-1">For the summer season</p>
            </div>
            <Image src={promo1} alt="promo1" />
          </div>
          <div className="bg-[#212121] text-white p-10 mt-3 text-center">
            <p className="text-4xl font-bold items=center ">GET 30% Off</p>
            <p className="text-sm mt-2">USE PROMO CODE</p>
            <span className="text-lg tracking-widest">DINEWEEKENDSALE</span>
          </div>
        </div>
        <div className="bg-[#EFE1C7] mt-10 ml-3">
          <h1 className="text-sm/[15px] p-5">Flex Sweatshirt</h1>
          <span className="text-base text-gray-500 ml-5 line-through">$100.00</span>
          <span className="text-lg font-semibold ml-3">$75.00</span>
          <Image className="h-[325px] object-scale-down" src={promo2} alt="promo2" />
        </div>
        <div className="bg-[#D7D7D9] mt-10 ml-3">
          <h1 className="text-sm/[15px] p-5">Flex Push Button Bomber</h1>
          <span className="text-base text-gray-500 ml-5 line-through">$225.00</span>{" "}
          <span className="text-lg font-semibold ml-3">$190.00</span>
          <Image className="h-[325px] object-scale-down"src={promo3} alt="promo3" />
        </div>
      </div>
    </section>
  );
};

export default Promotions;

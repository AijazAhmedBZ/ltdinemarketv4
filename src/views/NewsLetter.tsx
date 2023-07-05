import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <p className="font-bold text-3xl">Subscribe Our Newsletter</p>
        <p className="text-sm font-light mt-5 text-black">
          Get the latest information and promo offers directly
        </p>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="flex w-80 border-white">
          <Input placeholder="Input email address" />
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

import Image from "next/image";
import logo from "/public/logo.webp";
import { Twitter, Facebook, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div className="mt-32 flex justify-around gap-32" >
      <div>
        <Image src={logo} alt="dinemarket" className="w-40"></Image>
        <span className="text-[12px] " >
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </span>
        <div className="center">
          <Twitter />
          <Facebook />
          <Linkedin />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[15px]" >Company</h3>
        <h4 className="text-[13px]" >About</h4>
        <h4 className="text-[13px]" >Terms of Use</h4>
        <h4 className="text-[13px]" >Privacy Policy</h4>
        <h4 className="text-[13px]" >How it Works</h4>
        <h4 className="text-[13px]" >Contact Us</h4>
      </div>
      <div>
        <h3 className="font-bold text-[15px]" >Support</h3>
        <h4 className="text-[13px]" >Support Carrer</h4>
        <h4 className="text-[13px]" >24h Services</h4>
        <h4 className="text-[13px]" >Quick Chat</h4>
      </div>
      <div>
        <h3 className="font-bold text-[15px]" >Contact</h3>
        <h4 className="text-[13px]" >Whatsapp</h4>
        <h4 className="text-[13px]" >Support 24</h4>
      </div>
    </div>
  );
};

export default Footer;

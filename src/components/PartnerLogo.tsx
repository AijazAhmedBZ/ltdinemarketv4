import Image from "next/image";
import React from "react";
import Bazaar from "public/bazaar.png";
import Bustle from "public/bustle.png";
import Versace from "public/versace.png";
import Instyle from "public/instyle.png";
const PartnerLogo = () => {
  return (
    <div>
      <ul className="flex  gap-x-8 justify-between">
        <li>
          <Image src={Bazaar} alt="dinemarket_partner_logo"></Image>
        </li>
        <li>
          <Image src={Bustle} alt="dinemarket_partner_logo"></Image>
        </li>
        <li>
          <Image src={Versace} alt="dinemarket_partner_logo"></Image>
        </li>
        <li>
          <Image src={Instyle} alt="dinemarket_partner_logo"></Image>
        </li>
      </ul>
    </div>
  );
};

export default PartnerLogo;
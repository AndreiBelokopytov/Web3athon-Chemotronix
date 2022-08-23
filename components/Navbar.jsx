import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between py-2 mx-auto w-[80%]">
        <Image src={Logo} style={{ zIndex: 40 }} />
        <div className="md:flex hidden items-center w-[20%] justify-between">
          <a href="#" className="font-bold">
            About
          </a>
          <a href="#" className="font-bold">
            Team
          </a>
          <a href="#" className="font-bold">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

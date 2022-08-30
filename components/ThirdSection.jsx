import React from "react";
import Rectangle from "../images/Rectangle.png";
import Image from "next/image";
import ThirdSecBg from "../images/Vector (3).png";
import CardGradient from "../images/Vector (5).png";
import blockchain from "../images/blockchain.png";
import ai from "../images/ai.png";
import cleanEnergy from "../images/clean-energy.png";
import iot from "../images/iot.png";
function ThirdSection() {
  return (
    <div className="third-section min-h-screen fmx-auto">
      <Image src={Rectangle} style={{ zIndex: -10, marginBottom: "-78px" }} />
      <div className="flex flex-wrap items-center justify-between w-[80%] mx-auto">
        <div className="max-w-md lg:mb-0 mb-8">
          <h2 className="font-bold text-6xl max-w-xs uppercase">
            Who are <span className="text-primary">we?</span>
          </h2>
          <p className="text-[25px] mt-5">
            Chemotronix is a growing startup aim at developing clean energy
            technologies and digital solutions to ensure net zero emissions
            (decarbonization).
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
        <div className="bg-white rounded-xl px-8 py-20 shadow">
          <h2 className="font-bold text-6xl max-w-xs uppercase">
            Our <span className="text-accent">Mission</span>
          </h2>
          <p className="max-w-md text-[25px] mt-4">
            Ensuring data access to provide an easier framework for achieving
            our planet goals
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  items-center justify-between w-[80%] mx-auto mt-16">
        <div className="card-gradient rounded-xl  pt-20 shadow lg:mb-0 mb-8">
          <div className="px-8 pb-5">
            <h2 className="font-bold text-6xl max-w-xs uppercase ">
              Our <span className="text-[#0FE76A]">Vision</span>
            </h2>
          </div>

          <div className="px-8 bg-[#DCFFEB] pb-20 pt-8">
            <p className="max-w-md text-[25px] mt-4 ">
              At Chemotronix, we look forward to collaborating with
              organizations to drive innovation towards ensuring a safer planet
            </p>
          </div>
        </div>
        <div className="max-w-md">
          <h2 className="font-bold text-6xl max-w-xs uppercase">
            Our <span className="text-primary">solution</span>
          </h2>
          <p className="text-[25px] mt-5">
            At Chemotronix, we look forward to collaborating with organizations
            to drive innovation towards ensuring a safer planet
          </p>
          <div className="flex items-center justify-between mt-5">
            <Image src={ai} />
            <Image src={iot} />
            <Image src={blockchain} />
            <Image src={cleanEnergy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;

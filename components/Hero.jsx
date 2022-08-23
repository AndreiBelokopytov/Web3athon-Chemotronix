import React from "react";
import Image from "next/image";
import HeroPic from "../images/heropic.png";
import HeroGradient from "../images/herograd.png";
import HeroGradientMobile from "../images/mobilegrad.png";
import Rectangle from "../images/Rectangle.png";
import HeroCard from "./HeroCard";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="relative">
      <div className="absolute md:-bottom-3 md:top-auto top-40 destop-hero-grad  left-0 right-0   ">
        {" "}
        <Image src={HeroGradient} />
      </div>
      <div className="absolute md:-bottom-3 md:top-auto -top-28 mobilegrad left-0 right-0    ">
        {" "}
        <Image src={HeroGradientMobile} className="w-[100vw]" />
      </div>
      <div className="absolute md:-bottom-3 md:top-auto top-[18rem] left-0 right-0 -z-10">
        {" "}
        <Image src={Rectangle} />
      </div>
      <div className="flex items-center justify-between mx-auto w-[80%] mb-10">
        <motion.div
          initial={{ opacity: 0, y: -40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-xl z-30"
        >
          <h2 className="md:text-7xl text-4xl font-bold">
            Blockchain HR{" "}
            <span className="text-[#008036]">Software Solutions</span>
            <span className="text-[#E7E400]">.</span>
          </h2>
          <p>
            Bridging the gap to reducing greenhouse gas emissions using IoT and
            BlockChain to acheiving net zero by 2050
          </p>
          <button className="bg-[#008036] text-white rounded-md py-2 px-5 mt-5">
            Get started
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:block hidden"
        >
          <Image src={HeroPic} />
        </motion.div>
      </div>
      <div className="flex items-center md:flex-row flex-col justify-between mx-auto -mb-10  w-[80%]">
        <HeroCard number={"2022"} text="Founded" />
        <HeroCard number={"14,000"} text="Token supplied" />
        <HeroCard number={"1000"} text="Users" />
      </div>
    </div>
  );
}

export default Hero;

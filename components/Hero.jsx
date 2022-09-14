import React from "react";
import Image from "next/image";
import HeroPic from "../images/heropic.png";
import HeroGradient from "../images/herograd.png";
import HeroGradientMobile from "../images/mobilegrad.png";
import Rectangle from "../images/Rectangle.png";
import HeroCard from "./HeroCard";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="relative md:mt-0 mt-10">
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
              Bridging the gap to reducing greenhouse gas emissions using IoT
              and BlockChain to acheiving net zero by 2050
            </p>
            <label
              htmlFor="my-modal-4"
              className="bg-[#008036] text-white rounded-md py-2 px-5 mt-5 btn modal-button btn-primary border-none"
            >
              Get started
            </label>
          </motion.div>
          {/* <label htmlFor="my-modal-4" className="btn modal-button">open modal</label> */}

          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:block hidden"
          >
            <Image src={HeroPic} />
          </motion.div>
        </div>
        <div className="flex items-center justify-center md:flex-row flex-col  mx-auto -mb-10  w-[80%]">
          <HeroCard number={"2022"} text="Founded" />
        </div>
      </div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer  ">
        <div className="flex items-center justify-center">
          <label className="modal-box w-fit px-10 relative">
            <div className="w-full">
              <p className="mx-auto w-[50%]">Add</p>
              <h1 className="text-4xl md:text-6xl font-bold mx-auto  w-[50%]">
                WALLET
              </h1>
            </div>
            <div
              style={{
                background: "rgba(220, 255, 235, 0.93)",

                border: "2px solid rgba(0, 128, 54, 0.51)",
                /* Drop Shadow */

                boxShadow: "0px 10px 20px 5px rgba(0, 0, 0, 0.02)",
                borderRadius: "10px",
              }}
              className="px-3 py-4 md:w-[400px] w-full my-4"
            >
              {" "}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Wallet address"
                className="border-none bg-transparent outline-none placeholder:text-[#928B8B] w-full"
              />
            </div>
            <div className="mx-auto w-[50%]">
              <button
                onClick={() => router.push("/signedIn")}
                className="bg-[#008036] text-white rounded-md py-2 px-5   btn-primary border-none"
              >
                Continue
              </button>
            </div>
          </label>
        </div>
      </label>
    </>
  );
}

export default Hero;

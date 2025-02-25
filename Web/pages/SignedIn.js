import Head from "next/head";
import style from "../styles/signedIn.module.css";
import * as RiIcons from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import empty from "../images/empty.svg";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SignedIn() {
  const [buyCarbon, setBuyCarbon] = useState(false);
  const [showUsage, setShowUsage] = useState(false);

  const toggleBuyCarbon = () => {
    setBuyCarbon(!buyCarbon);
  };

  return (
    <main className="flex justify-center ">
      <div className="container px-5">
        <div className="mt-24">
          <div className="container flex flex-col overflow-x-hidden lg:flex-row justify-center">
            <div className="lg:w-1/2 flex flex-col md:flex-row overflow-hidden">
              <div className="w-36 h-36 mb-5 mr-5 md:mb-0 bg-yellow-400 rounded-full justify-center flex">
                <p className="text-center text-6xl my-auto">I</p>
              </div>
              <div className="flex flex-col justify-center ">
                <p>Welcome,</p>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Ikechukwu Divine
                </h1>
              </div>
            </div>
            <div className="hidden lg:w-1/2 lg:flex lg:justify-end items-center">
              <div className="bg-green-800 h-16 rounded-md cursor-pointer px-12 flex items-center">
                <p className=" text-white">Usage Chart</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="container flex flex-col lg:flex-row justify-center">
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex">
                <ConnectButton />
              </div>
            </div>
            <div className="lg:w-1/2 lg:flex lg:justify-end items-center">
              <div className=" relative w-auto">
                <div
                  className="bg-slate-50 border-4 cursor-pointer border-green-200 rounded-lg px-8 py-2 flex  justify-center items-center"
                  onClick={toggleBuyCarbon}
                >
                  <p className="mr-4">Buy carbon credit</p>
                  <RiIcons.RiArrowDropDownLine className="text-6xl" />
                </div>
                {buyCarbon && (
                  <div className="absolute top-[90px] w-full">
                    <div className="bg-slate-50 w-full border-2 cursor-pointer py-6 border-slate-50 border-t-green-800">
                      <ul className="flex flex-col w-full justify-center items-center">
                        <Link href={"/sendToken"}>
                          <li className=" py-3 hover:bg-slate-300 w-full text-center">
                            Send Token
                          </li>
                        </Link>
                        <Link href={"/buyToken"}>
                          <li className=" py-3 hover:bg-slate-300 w-full text-center">
                            Buy carbon credit
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-green-800">Credit Usage:</p>
          <div className="bg-green-200 mt-4 h-32 rounded-xl flex justify-around items-center">
            <p className=" text-green-800">Amount used</p>
            <p className=" text-green-800">Time</p>
            <p className=" text-green-800">Balance</p>
          </div>

          <div className="mt-20">
            {!showUsage && (
              <div className=" h-auto border-dashed rounded-lg border-2 px-3 border-slate-300">
                <div className=" flex  flex-col w-100 items-center justify-around ">
                  <Image src={empty} height={450} width={450} />
                  <p className=" font-extrabold text-slate-500 mt-[-30px] md:mt-[-50px] pb-16">
                    No data!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

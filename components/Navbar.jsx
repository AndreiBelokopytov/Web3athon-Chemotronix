import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  return (
    <div>
      <div className="lg:flex items-center justify-between navbar py-2 mx-auto w-[80%]">
        <Image
          src={Logo}
          style={{ zIndex: 40 }}
          onClick={() => router.push("/")}
        />
        <div class="hidden">
          <ul
            tabindex="0"
            class="menu flex flex-col lg:hidden  mx-auto w-[50%] z-40 bg-white "
          >
            <li tabindex="0">
              <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
                What we do
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=""
                  style={{ rotate: "90deg" }}
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <Link href="/technology">Technology</Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
                Industries
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=""
                  style={{ rotate: "90deg" }}
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Technology</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
                Build
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=""
                  style={{ rotate: "90deg" }}
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40 ">
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Technology</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="font-[400] text-[#01431D] text-lg">
                Team
              </a>
            </li>
          </ul>
          <label tabindex="0" class="btn btn-ghost lg:hidden z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <ul className=" menu lg:menu-horizontal hidden ">
          <li tabindex="0">
            <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              What we do
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              Industries
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              Build
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40 ">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="font-[400] text-[#01431D] text-lg">
              Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <div>
      <div className="lg:flex items-center justify-between navbar py-2 mx-auto w-[80%]">
        <Image
          src={Logo}
          style={{ zIndex: 40 }}
          onClick={() => router.push("/")}
        />

        <ul className=" menu lg:menu-horizontal hidden ">
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              What we do
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40">
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <Link href={"/technology"}>Technology</Link>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              Industries
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40">
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
              Build
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="py-2 px-4 border-t-2 border-primary bg-[#DCFFEB] z-40 ">
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li className="active:!bg-primary">
            <a href="#" className="font-[400] text-[#01431D] text-lg">
              Team
            </a>
          </li>
        </ul>
        <label
          tabIndex="0"
          className="btn btn-ghost lg:hidden z-40"
          onClick={() => setMobileNav(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div
        className={` absolute w-[100vw] px-5 bg-white py-10 z-50 transition-all duration-500 lg:hidden ${
          mobileNav ? "top-0" : "-top-[10000px]"
        } `}
      >
        <div
          className="flex items-center justify-end h-20 "
          onClick={() => setMobileNav(false)}
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu flex flex-col lg:hidden  mx-auto w-[80%] z-40 bg-white "
        >
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary border-[#99F5C0] border-b-2">
              What we do
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul
              className="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40 "
              style={{ position: "initial" }}
            >
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <Link href="/technology">Technology</Link>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary border-[#99F5C0] border-b-2">
              Industries
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul
              className="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40 "
              style={{ position: "initial" }}
            >
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary border-[#99F5C0] border-b-2">
              Build
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ rotate: "90deg" }}
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul
              className="py-2  border-t-2 border-primary bg-[#DCFFEB] z-40 "
              style={{ position: "initial" }}
            >
              <li className="active:!bg-primary">
                <a>About us</a>
              </li>
              <li className="active:!bg-primary">
                <a>Technology</a>
              </li>
            </ul>
          </li>
          <li className="active:!bg-primary">
            <a
              href="#"
              className="font-[400] text-[#01431D] text-lg border-[#99F5C0] border-b-2"
            >
              Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

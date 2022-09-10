import React from "react";
import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="footer mx-auto px-16 py-28">
        <div>
          <h1 className=" text-4xl text-black font-bold">WHAT WE DO</h1>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Our solutions</a>
        </div>
        <div>
          <h1 className=" text-4xl text-black font-bold">INDUSTRIES</h1>
          <a className="link link-hover">Grid Operators</a>
          <a className="link link-hover">Aggregators & OEMs</a>
          <a className="link link-hover">Energy Suppliers</a>
          <a className="link link-hover">E-Mobility</a>
          <a className="link link-hover">Crypto Climate Accord</a>
        </div>
        <div>
          <h1 className=" text-4xl text-black font-bold">BUILD</h1>

          <a className="link link-hover">Work with Us</a>
          <a className="link link-hover">Our Ecosystem</a>
          <a className="link link-hover">Join our Team</a>
        </div>
        <div>
          <h1 className=" text-4xl text-black font-bold">LEARN</h1>
          <a className="link link-hover">Tech Overview</a>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Github</a>
        </div>
        <div>
          <h1 className=" text-4xl text-black font-bold">ABOUT</h1>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="bg-[#E9F4FB] flex items-center justify-center py-6">
        <p>Copyright ©2022. All right reserved | Chemotronix</p>
      </footer>
    </>
  );
}

export default DefaultLayout;

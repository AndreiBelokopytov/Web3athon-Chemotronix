import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function DefaultLayout({ children, refScroll, aboutRef, teamRef }) {
  return (
    <div>
      <Navbar refScroll={refScroll} aboutRef={aboutRef} teamRef={teamRef} />
      {children}
     <Footer/>
    </div>
  );
}

export default DefaultLayout;

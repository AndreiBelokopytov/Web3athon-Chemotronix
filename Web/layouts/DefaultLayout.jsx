import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useEffect } from "react";

function DefaultLayout({ children }) {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("./");
    }
  }, [isConnected, router]);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;

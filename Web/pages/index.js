import Head from "next/head";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import QuoteSection from "../components/QuoteSection";
import TeamSection from "../components/TeamSection";
import ThirdSection from "../components/ThirdSection";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("./SignedIn");
    }
  }, [isConnected, router]);

  return (
    <div>
      <Head>
        <title>Chemotronix</title>
        <meta
          name="description"
          content="Chemotronix is a growing startup aim at developing clean energy technologies and digital solutions to ensure net zero emissions"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main
        className="overflow-x-hidden bg-transparent text-black"
        data-theme="emerald"
      >
        <Hero />
        <QuoteSection />
        <ThirdSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

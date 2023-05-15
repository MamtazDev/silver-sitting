import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import StartUp from "@/components/StartUp";
import About from "@/components/About";
import HowWorks from "@/components/HowWorks";
import Register from "@/components/Register";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kinderbetreuung finden | SilverSitting</title>
        <meta
          name="description"
          content="Finden Sie bei SilverSitting ganz einfach und unkompliziert erfahrene zuverlässige Kinderbetreuer. Jetzt suchen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <StartUp />
        <About />
        <HowWorks />
        <Register />
        <Footer />
      </main>
    </>
  );
}

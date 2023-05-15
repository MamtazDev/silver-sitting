import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import StartUp from "@/components/StartUp";
import About from "@/components/About";
import HowWorks from "@/components/HowWorks";
import Register from "@/components/Register";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
      </main>
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Announcement from "@/components/Announcement";
import HeroSectionOne from "@/components/HeroSectionOne";
import HeroSectionTwo from "@/components/HeroSectionTwo";
import HeroSectionThree from "@/components/HeroSectionThree";
import HeroSectionFour from "@/components/HeroSectionFour";
import HeroSectionFive from "@/components/HeroSectionFive";
import HeroSectionSix from "@/components/HeroSectionSix";
import HeroSectionSeven from "@/components/HeroSectionSeven";
import HeroSectionEight from "@/components/HeroSectionEight";
import HeroSectionNine from "@/components/HeroSectionNine";
import HeroSectionTen from "@/components/HeroSectionTen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Investments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Announcement />
        <HeroSectionOne />
        <HeroSectionTwo />
        <HeroSectionThree />
        <HeroSectionFour />
        <HeroSectionFive />
        {/* <HeroSectionSix /> */}
        <HeroSectionSeven />
        <HeroSectionEight />
        <HeroSectionNine />
        <HeroSectionTen />
        <Footer />
      </main>
    </>
  );
}

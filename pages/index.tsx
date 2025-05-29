import React from "react";
import Head from "next/head";
import HeroSection from "../components/Hero";
import AboutGlutenScan from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>GlutenScan – Skener bezglutenskih proizvoda</title>
        <meta
          name="description"
          content="Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan. Skeniraj bar-kod i saznaj da li je bezbedno!"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <HeroSection />
      <AboutGlutenScan />

      <footer
        style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#8C775D" }}
      >
        <p> © GlutenScan 2025 | Sva prava zadržana</p>
      </footer>
    </>
  );
}

import React from "react";
import HeroSection from "../components/Hero";
import AboutGlutenScan from "../components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutGlutenScan />
      <p className="text-xs text-[#3E2C22] mt-8">
        © GlutenScan 2025 | Sva prava zadržana
      </p>
    </>
  );
}

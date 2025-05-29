import React from "react";
import HeroSection from "../components/Hero";
import AboutGlutenScan from "../components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutGlutenScan />

      <footer
        style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#8C775D" }}
      >
        © GlutenScan 2025 | Sva prava zadržana
      </footer>
    </>
  );
}

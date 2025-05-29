import React from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="bg-[#FAF8F3] py-16 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <img
          src="/logo.svg"
          alt="GlutenScan Logo"
          className="w-32 mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#3E2C22] mb-4">
          GlutenScan dolazi uskoro
        </h1>
        <p className="text-[#3E2C22] text-lg mb-8">
          Aplikacija za brzo prepoznavanje glutena i alergena putem skeniranja
          barkoda. Pridružite nam se i budite među prvima koji će je koristiti.
        </p>

        <div className="inline-block p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#3E2C22] mb-2">
            Prijava za rani pristup
          </h2>
          <p className="text-[#3E2C22] text-sm mb-4">
            Skeniraj QR kod ili klikni na dugme da popuniš formu:
          </p>
          <img
            src="/qr-code.png"
            alt="QR kod za prijavu"
            className="w-40 mx-auto mb-2"
          />
          <p className="text-[#3E2C22] text-sm mb-4">
            Prijavi se za rani pristup
          </p>
          <a
            href="https://forms.gle/kgVStCsn1t3tUFqQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3E2C22] text-white font-semibold py-2 px-4 rounded hover:bg-[#2e2119] transition"
          >
            Popuni formu
          </a>
        </div>
      </div>
    </section>
  );
}

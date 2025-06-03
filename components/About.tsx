import React from "react";

export default function AboutGlutenScan(): JSX.Element {
  return (
    <section className="bg-[#FAF8F3] py-16 px-6 text-center text-[#3E2C22]">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          O aplikaciji GlutenScan
        </h2>

        <p className="mb-4 text-lg">
          <strong>GlutenScan</strong> je u razvoju kao prva digitalna
          <span className="font-semibold">
            {" "}
            baza bezglutenskih proizvoda na domaćem tržištu
          </span>
          , skeniraj bar-kod, fotografiši deklaraciju ili pretraži proizvode sa
          filterima. Uz podršku domaćih proizvođača, sve informacije na jednom
          mestu.
        </p>

        <p className="mb-8">
          Naš cilj je da korisnicima pružimo i{" "}
          <span className="font-semibold">
            lokacije prodajnih mesta, edukativne savete
          </span>{" "}
          o životu bez glutena, kao i{" "}
          <span className="font-semibold">recepte i iskustva zajednice</span>.
          GlutenScan raste u punu podršku za sve koji žive bez glutena.
        </p>

        <h3 className="mb-4 text-xl font-semibold">💛 Hvala na poverenju!</h3>

        <p className="mb-6">
          Prvi proizvođači koji su podržali razvoj GlutenScan aplikacije:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          <img
            src="/aleksandrija-logo.png"
            alt="Aleksandrija Fruška Gora logo"
            className="object-contain h-12 md:h-16"
          />
          <img
            src="/slavuj-logo.png"
            alt="Slavuj Grečka logo"
            className="object-contain h-16 md:h-20"
          />
          <img
            src="/molendini-logo.png"
            alt="Molendini logo"
            className="object-contain h-16 md:h-20"
          />
        </div>
        <a
          href="https://forms.gle/kgVStCsn1t3tUFqQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3E2C22] text-white font-semibold py-2 px-4 rounded hover:bg-[#2e2119] transition"
        >
          Pridruži se kao proizvođač
        </a>
      </div>
    </section>
  );
}

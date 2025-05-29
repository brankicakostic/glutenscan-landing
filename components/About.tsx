import React from "react";

export default function AboutGlutenScan() {
  return (
    <section className="bg-[#FAF8F3] py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2C22] mb-6">
          O aplikaciji GlutenScan
        </h2>
        <p className="text-[#3E2C22] text-lg leading-relaxed mb-6">
          <strong>GlutenScan</strong> je u razvoju kao prva digitalna{" "}
          <strong>baza bezglutenskih proizvoda na domaćem tržištu</strong>, uz
          podršku domaćih proizvođača. Aplikacija omogućava brzu i jednostavnu
          proveru proizvoda skeniranjem bar-koda, uz detaljne informacije o
          sastavu i sigurnosti.
        </p>
        <p className="text-[#3E2C22] text-lg leading-relaxed mb-6">
          Naš cilj je da korisnicima pružimo i{" "}
          <strong>lokacije prodajnih mesta</strong>,{" "}
          <strong>edukativne savete</strong> o životu bez glutena, kao i{" "}
          <strong>recepti i iskustva zajednice</strong>. GlutenScan raste u punu
          podršku za sve koji žive bez glutena.
        </p>

        <h3 className="text-2xl font-semibold text-[#3E2C22] mt-10 mb-4">
          🤝 Hvala na poverenju!
        </h3>
        <p className="text-[#3E2C22] mb-4">
          Prvi proizvođači koji su podržali razvoj GlutenScan aplikacije:
        </p>
        <ul className="text-[#3E2C22] font-medium">
          <li>🏷️ Aleksandrija Fruška Gora</li>
          <li>🏷️ Slavuj Grečka</li>
        </ul>

        <div className="mt-8">
          <a
            href="https://forms.gle/kgVStCsn1t3tUFqQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D2E2C4] hover:bg-[#C0D4AE] text-[#3E2C22] font-semibold py-3 px-6 rounded transition"
          >
            Pridruži se kao proizvođač
          </a>
        </div>
      </div>
    </section>
  );
}

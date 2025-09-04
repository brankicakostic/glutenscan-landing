"use client";

import Image from "next/image";
import Link from "next/link";

const PERMALINK = "https://forms.gle/2qjQfUWJa4P5PjBn6"; // stabilan link ka formi

function CopyLinkButton({ url }: { url: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(url)}
      className="rounded-xl border px-4 py-3 font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
      aria-label="Kopiraj link do forme"
    >
      Kopiraj link
    </button>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#2B1D14]">
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Image src="/logo.svg" alt="GlutenScan" width={100} height={100} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold">
          GlutenScan – Skener bezglutenskih proizvoda
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Skeniraj barkod, fotografiši deklaraciju ili pretraži bazu sa
          filterima — sve na jednom mestu.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={PERMALINK}
            className="rounded-xl bg-amber-800 px-5 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-offset-2"
          >
            Popuni formu
          </Link>
          <CopyLinkButton url={PERMALINK} />
        </div>

        <p className="mt-2 text-sm opacity-70">
          Ako dugme ne radi, nalepi link u adresnu liniju.
        </p>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-3xl px-4 py-8 text-center">
        <h2 className="text-2xl font-bold">O aplikaciji GlutenScan</h2>
        <p className="mt-3 leading-relaxed">
          GlutenScan je u razvoju kao prva digitalna baza bezglutenskih
          proizvoda na domaćem tržištu. Naš cilj je sigurnost osoba sa
          celijakijom i intolerancijom — kroz proverene informacije o
          proizvodima, lokacije kupovine, edukativne savete i podršku zajednice.
        </p>
        <p className="mt-3 text-lg">
          Hvala na poverenju! <span aria-hidden>💛</span>
        </p>
      </section>

      {/* PRODUCERS INFO */}
      <section className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h3 className="text-xl font-semibold">
          GlutenScan baza započeta je sa proizvodima domaćih proizvođača.
        </h3>
        <p className="mt-3 text-base opacity-90">
          Naš cilj je da uključimo što više proverenih proizvoda i omogućimo
          sigurnost osobama sa celijakijom i intolerancijom.
        </p>

        <div className="mt-8">
          <Link
            href="https://forms.gle/WmZPJaSY45XHwiBN6"
            className="inline-block rounded-xl border px-5 py-3 font-semibold hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Pridruži se kao proizvođač
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-80">
          © GlutenScan 2025 · Sva prava zadržana
        </div>
      </footer>
    </main>
  );
}

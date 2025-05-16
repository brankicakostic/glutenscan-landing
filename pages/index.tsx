
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-bgLight min-h-screen flex flex-col items-center justify-center text-primary font-sans p-6">
      <div className="max-w-xl w-full text-center">
        <div className="mb-6">
          <img src="/GlutenScan_Light.svg" alt="GlutenScan Logo" className="h-16 mx-auto" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          GlutenScan dolazi uskoro
        </h1>
        <p className="text-lg text-primary mb-6">
          Aplikacija za brzo prepoznavanje glutena i alergena putem skeniranja bar-koda. Pridružite nam se i budite među prvima koji će je koristiti.
        </p>

        <div className="w-full aspect-[4/5] max-w-xl mx-auto">
          <iframe
            src="https://forms.gle/rjVt9oGqBZW1kjXh7"
            width="100%"
            height={600}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className="w-full rounded shadow"
            title="Prijava za GlutenScan"
          >
            Učitavanje…
          </iframe>
          <p className="text-xs text-borderDefault mt-4 italic">
            Vaši podaci biće korišćeni isključivo za obaveštenje o lansiranju GlutenScan aplikacije.
            Ne delimo ih ni koristimo u marketinške svrhe.
          </p>
        </div>

        <footer className="text-sm text-primary mt-10">
          Kontakt: brankica.gosic@gmail.com<br />
          <span className="text-borderDefault text-xs">* Aplikacija je trenutno u fazi razvoja.</span>
        </footer>
      </div>
    </main>
  );
}

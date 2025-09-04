import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlutenScan – Skener bezglutenskih proizvoda",
  description:
    "Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan. Skeniraj barkod, fotografiši deklaraciju ili pretraži bazu na jednom mestu.",
  keywords: [
    "GlutenScan",
    "bez glutena",
    "celijakija",
    "skener proizvoda",
    "gluten free aplikacija",
    "GF proizvodi",
  ],
  openGraph: {
    title: "GlutenScan – Skener bezglutenskih proizvoda",
    description:
      "Prva digitalna baza bezglutenskih proizvoda na domaćem tržištu. Sigurnost za osobe sa celijakijom i intolerancijom.",
    url: "https://www.gluten-scan.com",
    siteName: "GlutenScan",
    images: [
      {
        url: "https://www.gluten-scan.com/og-preview.png",
        width: 1200,
        height: 630,
        alt: "GlutenScan aplikacija",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlutenScan – Skener bezglutenskih proizvoda",
    description:
      "Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan.",
    images: ["https://www.gluten-scan.com/og-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>
        {children}

        {/* Plausible analytics */}
        <script
          defer
          data-domain="gluten-scan.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}

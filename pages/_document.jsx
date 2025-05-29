import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan. Skeniraj ili pretrazi i saznaj da li je bezbedno!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GlutenScan – Skener bezglutenskih proizvoda"
        />
        <meta
          property="og:description"
          content="Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan."
        />
        <meta property="og:url" content="https://www.gluten-scan.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.gluten-scan.com/og-preview.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GlutenScan – Skener bezglutenskih proizvoda"
        />
        <meta
          name="twitter:description"
          content="Pronađi proverene bezglutenske proizvode uz pomoć aplikacije GlutenScan."
        />
        <meta
          name="twitter:image"
          content="https://www.gluten-scan.com/og-preview.png"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // ovde se učitava Tailwind

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

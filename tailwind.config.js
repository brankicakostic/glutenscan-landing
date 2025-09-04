/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E2C22",
        primaryDark: "#5B4434",
        bgLight: "#FAF8F3",
        bgDark: "#2B1D14",
        accentGreen: "#D2E2C4",
        accentYellow: "#E3C26B",
        accentRed: "#8C775D",
        textLight: "#F9F6ED",
        borderDefault: "#E0DBCF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noev", "sans-serif"],
        neov: ["Noev", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4C0378",

          secondary: "#4F0147",

          accent: "#35012C",

          neutral: "#FCFCFC",

          "base-100": "#11001C",

          info: "#130120",

          success: "#80ced1",

          warning: "#efd8bd",

          error: "#e58b8b",
          "nav-color": "#130120",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

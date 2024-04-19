/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Basis Grotesque Pro"],
      },
      colors: {
        beige200: "#EFE8DF",
      },
    },
    plugins: [],
  },
};

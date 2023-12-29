/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FA782F60",
          500: "#FA782F",
        },
        secondary: {
          200: "#F8F8F8",
          300: "#D9D9D9",
          500: "#C4C4C4",
          800: "#212121",
        },
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      animation: {
        expand: "expand 1s ease-in-out",
      },
      keyframes: {
        expand: {
          "0%": { height: "0" },
          "100%": { height: "4rem" },
        },
      },
      backgroundImage: (theme) => ({
        screen: "url('src/assets/Screens.svg')",
      }),
    },
  },
  plugins: [require("tailwindcss-animated")],
};

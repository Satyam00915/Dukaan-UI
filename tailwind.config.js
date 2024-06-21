/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#1e2650",
          400: "#146eb4",
          500: "#146eb4",
          700: "#326cae",
          800: "#244e7d",
        },
        grey: {
          500: "#f2f2f2",
          600: "#ededed",
          800: "#999999",
        },
      },
    },
  },
  plugins: [],
};

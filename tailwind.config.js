/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Rubik, sans-serif",
      },
      colors: {
        // primary: "#EEF5FF",
        primary: "#EEEEEE",

        // secondary: "#A25772",
        secondary: "#EFEFEF",
        // tertiary: "#7C93C3",
        tertiary: "#7882A4",
      },
    },
  },
  plugins: [],
};

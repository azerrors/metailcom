/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: "Rubik, sans-serif",
      },
      colors: {
        // primary: "#EEF5FF",
        // primary_light: "#EEEEEE",

        // primary: "#27374D",
        primary_light: "#1e2b3c",
        primary_dark: "#161f2b",

        // secondary: "#A25772",

        // secondary: "#EFEFEF",
        secondary: "#EFEFEF",

        // tertiary: "#7C93C3",
        tertiary_light: "#7882A4",

        tertiary_dark: "#0d131a",
      },
    },
  },
  plugins: [],
};

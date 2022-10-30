/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      // --> Customize your colors here
    },
    screens: {
      // --> Customize the breakpoints here
    },
    fontFamily: {
      // --> Customize the font families here
    },
    extend: {
      spacing: {
        // --> Customize the spacing here
      },
      borderRadius: {
        // --> Customize the border radius here
      },
    },
  },
  plugins: [],
};

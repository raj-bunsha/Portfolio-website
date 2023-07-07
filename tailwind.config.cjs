/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // colors: {
      //   primary: "#050816",
      //   secondary: "#aaa6c3",
      //   tertiary: "#151030",
      //   ptext: "#fff",
      //   stext: "#915EFF",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
        // },
        colors: 
      {
        primary:"#e5e9f0",
        secondary:"#6d3e8e",
        tertiary:"#cccff5",
        ptext:"#090b0c",
        stext:"#6d3e8e",
        ttext:"#020303",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

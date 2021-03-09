module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        md: "888px",
      },
      spacing: {
        90: "24rem",
        100: "28rem",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};

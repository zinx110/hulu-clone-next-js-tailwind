const tailwindcss = require("tailwindcss");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ks,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  content: [],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require(`tailwind-scrollbar-hide`)],
};

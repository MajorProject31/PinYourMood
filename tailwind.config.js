/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: "#E5BEEC",
        cPink: "#ECCDB4",
        cBackgroundBlue: "#79E0EE",
        cSearchIcon: "#FC4F00",
        cSearchText: "#DB005B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darkbrown: "#1A120B",
        brown: "#3C2A21",
        cream: "#D5CEA3",
        lightcream: "#E5E5CB",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": {
            visibility: "visible",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

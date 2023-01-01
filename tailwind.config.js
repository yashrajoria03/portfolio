/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        backgroundColor: "rgba(17,17,17,1)",
        backgroundColorNav: "rgba(17,17,17,0.7)",
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        purpleDark: "#dadaff",
        greenDark: "rgba(0, 128, 115, 0.53)",
        overlay: "#999999",
        cardColor: "#121212",
        cc: "#6366f1",
      },
      fontFamily: {
        interF: ["Inter"],
      },
      backgroundImage: {
        "desktop-pattern": "url('/images/desk-pattern.svg')",
      },
    },
  },
  plugins: [],
};

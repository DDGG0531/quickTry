/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#EEF6EE",
          100: "#C9E2CB",
          200: "#AFD4B1",
          300: "#8AC08E",
          400: "#73B478",
          500: "#50A156", // default
          600: "#49934E",
          700: "#568159",
          800: "#2C592F",
          900: "#224424",
          light: "#EEF6EE",
          DEFAULT: "#50A156",
        },
        blue: {
          50: "#EBF5FA",
          100: "#C1E1F0",
          200: "#A3D2E8",
          300: "#78BEDE",
          400: "#5EB1D8",
          500: "#369ECE", // default
          600: "#3190BB",
          700: "#267092",
          800: "#1E5771",
          900: "#174257",
          special: "#5AC8FA",
          DEFAULT: "#369ECE",
        },
        gray: {
          50: "#F3F3F3",
          100: "#D9D9D9",
          200: "#C7C7C7",
          300: "#ADADAD",
          400: "#9D9D9D",
          500: "#858585", // default
          600: "#797979",
          700: "#5E5E5E",
          800: "#494949",
          900: "#383838",
          light: "#F8F8F8",
          medium: "#CCCCCC",
          DEFAULT: "#858585",
        },
        danger: {
          500: "#EA6035", // default
          DEFAULT: "#EA6035",
        },
      },
      screens: {
        // 寫給Chakra看的
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // => @media (min-width: 640px 包含640) { ... }
        tablet: "640px", // 640~1279
        laptop: "1024px",
        desktop: "1280px", // 1280~
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      borderRadius: {
        DEFAULT: "10px",
      },
    },
  },
  plugins: [],
};

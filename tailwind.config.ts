import type { Config } from "tailwindcss";
import { keepTheme, colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  primary: {
    "500": "#F6931D",
    main: "#F6931D", //yellow
  },
  secondary: {
    main: "#0C254D", // navy-blue
    25: "#E3EAF3",
    50: "#C8D5E7",
    100: "#A3B9D4",
    200: "#d7dfe9",
    300: "#7E9EC1",
    400: "#5A82AE",
    500: "#3D6999",
    600: "#2E547A", // main used for text color
    700: "#20405C",
    800: "#142C3D",
    900: "#0C254D",
  },
  metal: {
    25: "#f9fafb",
    50: "#e9eff6", // 50===100
    100: "#e9eff6", // 50===100
    200: "#d7dfe9",
    300: "#afbaca",
    400: "#8897ae",
    500: "#5e718d",
    600: "#2d3643", // main used for text color
    700: "#3d4a5c",
    // 800: "#2d3643",
    800: "#142C3D",
    900: "#142C3D", // dark primary color
  },
  outbox: "#d6d6d6",
  // navyBlue: "#0C254D",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default keepTheme(config, colorsPalette);

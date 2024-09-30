import type { Config } from "tailwindcss";
import { keepTheme } from "keep-react/keepTheme";

import { colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  primary: {
    "500": "#F6931D",
  },
  secondary: {
    "500": "#0C254D",
  },
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

import baseConfig from "@acme/tailwind-config";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.tsx"],
  presets: [baseConfig],
  plugins: [
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
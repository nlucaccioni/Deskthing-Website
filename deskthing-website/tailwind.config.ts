import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        Wingding: ['THEBOLDFONT', 'sans-serif'],
        geistMono: ['GeistMono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
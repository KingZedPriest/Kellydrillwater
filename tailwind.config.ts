import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {
      colors: {
        whiteColor: "#F6F6F6",
        accentColor: "#25867d",
        secAccentColor: "#1d343f",
        headersColor: "#3da959",
        textColor: "#2e6b56",
        linkColor: "#18578b",
        btnHoverColor: "#20698b",
        containerColor: "#1a669d",
        borderColor: "#2e593f",
        footerColor: "#3c9569",
      },
    },
  },
  plugins: [],
}
export default config

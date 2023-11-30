import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        'background': '#333333',
        'primary': '#EB8921',
        'secondary': '#F5AD28',
        'light': '#BAC2CD'
      },
    },
  },
  plugins: [],
}
export default config

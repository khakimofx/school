import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        custom: ['"CustomFont"', 'Khula']
      },
      headerBg: {
        'header-bg': 'linear-gradient(to right, #fff, #000)'
      },
      screens: {
        'sm': '320px',
        // 'md': '580px',
        '2xl': '1376px',
        '3xl':'1692px'
      }
    }
  },
  plugins: []
}
export default config

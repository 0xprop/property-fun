import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      colors: {
        'primary': '#f80fb7',
        'footer-text': '#1E1E1E',
        'soft-grey': '#F3F4F6',  // This will be used for background
      },
    },
  },
  plugins: [],
}

export default config

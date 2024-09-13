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
      textShadow: {
        'reflection': '0 1px 0 rgba(255, 255, 255, 0.4), 0 -1px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function({ addComponents }: { addComponents: (components: Record<string, any>) => void }) {
      const newComponents = {
        '.text-shadow-reflection': {
          textShadow: '0 3px 3px rgba(255, 255, 255, 0.7), 0 -3px 3px rgba(0, 0, 0, 0.7)',
        },
      }
      addComponents(newComponents)
    }
  ],
}

export default config

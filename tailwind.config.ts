import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vsc: {
          background: '#1e1e1e',
          activity: '#333333',
          sidebar: '#252526',
          status: '#007acc',
          text: '#cccccc',
        },
      },
    },
  },
  plugins: [],
}

export default config

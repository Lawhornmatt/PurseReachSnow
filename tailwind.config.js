/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint:   {
          DEFAULT:  'rgba(var(--background), <alpha-value>)'
        },
        cymru:  {
          DEFAULT:  'rgba(var(--font), <alpha-value>)'
        },
        virid:  {
          DEFAULT:  'rgba(var(--boxHighlight), <alpha-value>)'
        },
        dew:    {
          DEFAULT:  'rgba(var(--boxGreyout), <alpha-value>)'
        },
        robin:  {
          DEFAULT:  'rgba(var(--projBox), <alpha-value>)'
        },
      }
    },
  },
  plugins: [],
}

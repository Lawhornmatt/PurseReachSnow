/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsml: '360px'
      },
      colors: {
        mint:   {
          DEFAULT:  'rgba(var(--background), <alpha-value>)'
        },
        cymru:  {
          DEFAULT:  'rgba(var(--font), <alpha-value>)'
        },
        leaf:   {
          DEFAULT:  'rgba(var(--boxBackground), <alpha-value>)'
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
      },
      letterSpacing: {
        logo: '1rem',
        navbar: '.5rem',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      dropShadow: {
        '3xl': '0 1rem 0.5rem rgba(var(--background), 0.95)',
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

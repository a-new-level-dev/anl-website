const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.entries(tokens).reduce((acc, [key, value]) => {
   // Filter Hex colors from the f36-tokens
   if (/^#[0-9A-F]{6}$/i.test(value)) {
      acc[key] = value;
   }

   return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors,
      extend: {
         colors: {
            'anl-blue': '#0b0928',
            'anl-red': '#4d090a',
            'c-gray': '#cccccc',
         },
         fontFamily: {
            sans: ['var(--font-urbanist)', ...fontFamily.sans],
         },
         fontSize: {
            '2xs': '0.625rem',
            '3xl': '1.75rem',
            '4xl': '2.5rem',
         },
         letterSpacing: {
            snug: '-0.011em',
         },
         lineHeight: {
            tighter: 1.1,
         },
         maxWidth: {
            '8xl': '90rem',
         },
      },
   },
   plugins: [require('@tailwindcss/typography')],
};

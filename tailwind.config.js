/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        133: "133px",
        840:"840px",
        875:"875px",
        30:"30px",
        737:"737px",
        81:"81px",
        616:"616px",
        115:"115px",
        126:"126px",
        528:"528px",
        445:"445px",
        332:"332px",
        15:"15%",
        461:"461px",
        332:"332px",
        66:"66px",
        113:"113px",
      },
      colors: {
        customBlue: '#001932',
        customblues:'#1F9EA6',
        customblued: {
          darker: '#093A71',
          DEFAULT: '#1F9EA6',
        },
        
        
      },
    },
  },
  plugins: [],
};

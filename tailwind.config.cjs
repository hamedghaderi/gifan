/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
    },
    boxShadow: {
        none: 'none',
        md: '0px 1px 4px rgba(0,0,0,.16)'
    },
    colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        gray: {
            100: '#F3F5F6',
            200: '#EDECE9',
            300: '#DFDFE1',
            500: '#5B6168',
            700: '#7A7C84',
            800: '#2A303C',
            900: '#131927',
        },
        blue: {
            100: '#F0F4FF',
            600: '#155EF3',
            700: '#175CE8',
            900: '#121827',
        }
    },
  },
  plugins: [],
}

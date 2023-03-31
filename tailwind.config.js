/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tabActive': '#840084',
        'tabBg': '#241B2F',
        'tabText': '#EEEDEF',

        'sideBg': '#181520',
        'sideIcon': '#A2A1A5',

        'ideBg': '#262335',
        'ide-comment': '#A9AED1',
        'ide-gray': '#B5B5B6',
        'ide-green': '#72F1B8',
        'ide-orange': '#F88A3A',
        'ide-pink': '#DF9AD0',
        'ide-teal': '#44F1EF',
        'ide-text': '#FAFAFA',
        'ide-yellow': '#F8DB5C',
      },
    },
  },
  plugins: [],
}

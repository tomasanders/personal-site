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
        'd-tabBg': '#241B2F',
        'tabBg': '#DDDDDD',
        'd-tabText': '#EEEDEF',
        'tabText': '#474B50',
        'd-tabActive': '#840084',
        'tabActive': '#2C2C2C',
        'd-sideBg': '#181520',
        'sideBg': '#E1ECF9',
        'd-sideIcon': '#A2A1A5',
        'sideIcon': '#545557',
        'd-ideBg': '#262335',
        'ideBg': '#FAFAFA',


        'd-ide-comment': '#A9AED1',
        'l-ide-comment': '#50575E',
        'd-ide-teal': '#44F1EF',
        'l-ide-teal': '#2B5691',
        'd-ide-yellow': '#F8DB5C',
        'l-ide-yellow': '#6629D8',
        'd-ide-green': '#72F1B8',
        'l-ide-green': '#A3252F',
        'd-ide-orange': '#F88A3A',
        'l-ide-orange': '#7D4A00',
        'd-ide-pink': '#DF9AD0',
        'l-ide-pink': '#2C612F',
        'd-ide-gray': '#B5B5B6',
        'l-ide-gray': '#A61851',
        'd-ide-text': '#FAFAFA',
        'l-ide-text': '#222222',
      },
    },
  },
  plugins: [],
}

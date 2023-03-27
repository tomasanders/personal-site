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
        'd-comment': '#A9AED1',
        'comment': '#50575E',
        'd-variable': '#44F1EF',
        'variable': '#2B5691',
        'd-function': '#F8DB5C',
        'function': '#6629D8',
        'd-keyword': '#72F1B8',
        'keyword': '#A3252F',
        'd-string': '#1E1B29',
        'string': '#7D4A00',
        'd-param': '#DF9AD0',
        'param': '#2C612F',
        'd-operator': '#B5B5B6',
        'operator': '#A61851',
        'd-text': '#B0AFB2',
        'text': '#24292F',
      },
    },
  },
  plugins: [],
}

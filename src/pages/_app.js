import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  ideBg: '#262335',
  sideBg: '#181520',
  tabBg: '#241b2f',
  sideIcon: '#a2a1a5',
  tabActive: '#840084',
  tabText: '#eeedef',
  ideYellow: '#f8db5c',
  idePink: '#df9ad0',
  ideTeal: '#44f1ef',
  ideOrange: '#1e1b29',
  ideGreen: '#72f1b8',
  ideComment: '#a9aed1',
  ideWhite: '#b5b5b6'
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

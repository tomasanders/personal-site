import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  ideBg: '#262335',
  sideBg: '#181520',
  tabBg: '#241b2f',
  sideIcon: '#a2a1a5',
  tabActive: '#840084',
  tabText: '#eeedef',
  ideVariable: '#f8db5c',
  ideFunction: '#df9ad0',
  ideKeyword: '#44f1ef',
  ideString: '#1e1b29',
  ideParam: '#72f1b8',
  ideComment: '#a9aed1',
  ideOperator: '#b5b5b6',
  ideText: '#B0AFB2'
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

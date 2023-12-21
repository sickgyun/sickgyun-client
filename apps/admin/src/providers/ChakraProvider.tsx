import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as SickgyunChakraProvider, extendTheme } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

const colors = {
  primary: '#257CFF',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const ChakraProvider = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <SickgyunChakraProvider theme={theme}>{children}</SickgyunChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;

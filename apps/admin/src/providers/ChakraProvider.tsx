import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as CheerUpChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#257CFF',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const ChakraProvider = ({ children }: StrictPropsWithChildren) => {
  return (
    <CacheProvider>
      <CheerUpChakraProvider theme={theme}>{children}</CheerUpChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;

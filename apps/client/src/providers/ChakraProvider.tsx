import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as CheerUpChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#257CFF',
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

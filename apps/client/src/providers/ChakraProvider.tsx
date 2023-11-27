import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as ConnectChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#257CFF',
};

const theme = extendTheme({ colors });

const ChakraProvider = ({ children }: StrictPropsWithChildren) => {
  return (
    <CacheProvider>
      <ConnectChakraProvider theme={theme}>{children}</ConnectChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;

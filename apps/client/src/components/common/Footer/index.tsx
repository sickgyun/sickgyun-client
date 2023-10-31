import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="blackAlpha.50"
      width="100vw"
      height="80px"
    >
      <Text color="blackAlpha.700" fontSize="16px">
        Copyright (c) 김석진 X 백서진. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

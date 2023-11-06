'use client';

import { Box, Spinner } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

const BsmAuth = () => {
  const params = useSearchParams();
  console.log(params.get('code'));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      backgroundColor="white"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary"
        size="xl"
      />
    </Box>
  );
};

export default BsmAuth;

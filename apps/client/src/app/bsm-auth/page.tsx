'use client';

import { Box, Spinner } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLoginBsmMutation } from '@/hooks/api/auth/useLoginBsmMutation';

const BsmAuth = () => {
  const params = useSearchParams();

  const { mutate: loginBsmMutate } = useLoginBsmMutation();

  useEffect(() => {
    const authCode = params.get('code');
    if (authCode) {
      loginBsmMutate({ authCode });
    }
  }, [loginBsmMutate, params]);

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

'use client';

import { Box, Spinner } from '@chakra-ui/react';
import { Storage } from '@connect/libs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useLoginBsmMutation } from '@/hooks/api/auth/useLoginBsmMutation';

const BsmAuthPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { mutate: loginBsmMutate } = useLoginBsmMutation({
    onSuccess: (data) => {
      const { accessToken, isGraduate } = data.data;

      Storage.setItem(LOCAL_STORAGE_KEY.accessToken, `Bearer ${accessToken}`);

      const redirectPath = isGraduate === 'GRADUATE' ? '/user/info' : '/';

      router.replace(redirectPath);
    },
    onError: (data) => {
      if (data.message) {
        alert(data.message);
      }
      router.replace('/');
    },
  });

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

export default BsmAuthPage;

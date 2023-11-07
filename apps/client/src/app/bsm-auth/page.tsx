'use client';

import { Box, Spinner } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useLoginBsmMutation } from '@/hooks/api/auth/useLoginBsmMutation';

const BsmAuth = () => {
  const router = useRouter();
  const params = useSearchParams();

  const {
    mutate: loginBsmMutate,
    data: loginBsmData,
    error: loginBsmError,
  } = useLoginBsmMutation();

  useEffect(() => {
    const authCode = params.get('code');

    if (authCode) {
      loginBsmMutate({ authCode });
    }
  }, [loginBsmMutate, params]);

  useEffect(() => {
    if (loginBsmData) {
      if (loginBsmData.data) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY.accessToken,
          loginBsmData.data.accessToken
        );
        router.replace('/');
      } else {
        alert('로그인 도중 오류가 발생하였습니다. 다시 한번 시도해주세요.');
      }
    }
  }, [loginBsmData, router]);

  useEffect(() => {
    if (loginBsmError) {
      alert('로그인 도중 오류가 발생하였습니다. 다시 한번 시도해주세요.');
      router.replace('/');
    }
  }, [loginBsmError, router]);

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

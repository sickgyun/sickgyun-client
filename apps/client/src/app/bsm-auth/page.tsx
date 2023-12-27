'use client';

import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Storage } from '@sickgyun/libs';
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
    <StyledBsmAuthPageLayout>
      <StyledBsmAuthPage>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </StyledBsmAuthPage>
    </StyledBsmAuthPageLayout>
  );
};

export default BsmAuthPage;

const StyledBsmAuthPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledBsmAuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

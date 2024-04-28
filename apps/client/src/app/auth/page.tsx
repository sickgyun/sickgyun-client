'use client';

import styled from '@emotion/styled';
import { Spinner } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useLoginGoogle } from '@/hooks/api/auth/useLoginGoogle';
import { LocalStorage } from '@/libs/api/storage';
import { useToast } from '@/libs/toast';
import { getGoogleAccessToken } from '@/utils/getGoogleAccessToken';

const AuthPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: loginGoogleMutate } = useLoginGoogle({
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;

      LocalStorage.setItem(LOCAL_STORAGE_KEY.accessToken, `Bearer ${accessToken}`);
      LocalStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, `Bearer ${refreshToken}`);
      router.replace('/');
    },
    onError: () => {
      toast.error('학교 계정으로 로그인 해주세요.');
      router.replace('/');
    },
  });

  useEffect(() => {
    const accessToken = getGoogleAccessToken();

    if (accessToken) {
      loginGoogleMutate({ accessToken });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAuthPageLayout>
      <StyledAuthPage>
        <Spinner />
      </StyledAuthPage>
    </StyledAuthPageLayout>
  );
};

export default AuthPage;

const StyledAuthPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledAuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

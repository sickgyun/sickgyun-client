'use client';

import styled from '@emotion/styled';
import { Storage } from '@sickgyun/libs';
import { Spinner } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGoogleLoginMutation } from '@/hooks/api/auth/useLoginGoogleMutation';

const GoogleLoginPage = () => {
  const router = useRouter();

  const { mutate: loginGoogleMutate } = useGoogleLoginMutation({
    onSuccess: (data) => {
      const { accessToken } = data;

      Storage.setItem(LOCAL_STORAGE_KEY.accessToken, `Bearer ${accessToken}`);

      router.replace('/');
    },
    onError: (data) => {
      if (data.message) {
        alert(data.message);
      }
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
    <StyledGoogleLoginPageLayout>
      <StyledGoogleLoginPage>
        <Spinner />
      </StyledGoogleLoginPage>
    </StyledGoogleLoginPageLayout>
  );
};

export default GoogleLoginPage;

const getGoogleAccessToken = () => {
  const params = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = params.get('access_token');

  return accessToken;
};

const StyledGoogleLoginPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledGoogleLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

'use client';

import styled from '@emotion/styled';
import { Spinner } from '@sickgyun/ui';
import { useEffect } from 'react';
import { useLoginGoogle } from '@/hooks/api/auth/useLoginGoogle';
import { getGoogleAccessToken } from '@/utils/getGoogleAccessToken';

const GoogleLoginPage = () => {
  const { mutate: loginGoogleMutate } = useLoginGoogle();

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

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Flex } from '@sickgyun/ui';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { isLoginState, useUserInformation } from '@/store/UserInformation';

const Header = () => {
  const router = useRouter();

  const setIsLogin = useSetAtom(isLoginState);

  const { isLogin } = useUserInformation();

  const handleLogin = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL) return;
    router.replace(process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL);
  };

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
    setIsLogin(false);
    router.push('/');
  };

  return (
    <StyledHeader>
      <Flex
        align="center"
        justify="space-between"
        style={{ margin: '0 auto', width: '80%', height: '100%' }}
      >
        <Image
          src="/assets/svgs/logo.svg"
          onClick={() => router.replace('/')}
          width={90}
          height={32}
          style={{ cursor: 'pointer' }}
          alt="Logo"
        />
        {isLogin ? (
          <Button onClick={handleLogout} styleType="ghost" size="small" width="90px">
            로그아웃
          </Button>
        ) : (
          <Button onClick={handleLogin} styleType="ghost" size="small" width="90px">
            로그인
          </Button>
        )}
      </Flex>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 54px;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray200};
    background-color: ${theme.colors.white};
  `}
`;

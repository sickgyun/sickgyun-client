import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconNotificationFill } from '@seed-design/icon';
import { Button, Flex, Stack } from '@sickgyun/ui';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/common/useUser';
import { isLoginAtom } from '@/store/user';

const Header = () => {
  const router = useRouter();
  const setIsLogin = useSetAtom(isLoginAtom);
  const user = useUser();

  const handleLogin = () => {
    router.replace(process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
    setIsLogin(false);
  };

  const handleGoNotificationPage = () => {
    router.push('/coffechat');
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
        <Stack direction="horizontal" align="center" spacing={12}>
          {user.hasCreatedProfile && (
            <StyledNotificationButton onClick={handleGoNotificationPage} />
          )}
          {user.isLogin ? (
            <Button onClick={handleLogout} styleType="ghost" size="small" width="90px">
              로그아웃
            </Button>
          ) : (
            <Button onClick={handleLogin} styleType="ghost" size="small" width="90px">
              로그인
            </Button>
          )}
        </Stack>
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

const StyledNotificationButton = styled(IconNotificationFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
`;

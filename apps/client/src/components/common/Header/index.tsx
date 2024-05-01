import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Flex, Stack } from '@sickgyun/ui';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import Logo from '../Logo';
import NotificationButton from '../NotificationButton';
import { useUser } from '@/hooks/common/useUser';
import { RESET_USER, userAtom } from '@/stores/user/userAtom';

const Header = () => {
  const router = useRouter();
  const setUser = useSetAtom(userAtom);
  const { user, isLoading } = useUser();

  const handleLogin = () => {
    router.replace(process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL);
  };

  const handleLogout = () => {
    setUser(RESET_USER);
    localStorage.clear();
    router.replace('/');
  };

  return (
    <StyledHeader>
      <Flex
        align="center"
        justify="space-between"
        style={{ margin: '0 auto', width: '80%', height: '100%' }}
      >
        <Logo
          width={90}
          height={32}
          onClick={() => router.replace('/')}
          style={{ cursor: 'pointer' }}
        />
        {!isLoading && (
          <Stack direction="horizontal" align="center" spacing={12}>
            {user.isLogin && (
              <NotificationButton hasNotification={user.hasNotification} />
            )}
            {user.isLogin ? (
              <Button onClick={handleLogout} styleType="ghost" size="small">
                로그아웃
              </Button>
            ) : (
              <Button onClick={handleLogin} styleType="ghost" size="small">
                로그인
              </Button>
            )}
          </Stack>
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

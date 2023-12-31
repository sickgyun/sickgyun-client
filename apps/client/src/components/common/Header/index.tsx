import styled from '@emotion/styled';
import { Button, Flex, Text } from '@sickgyun/ui';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { isLoginState, useUserInformation } from '@/store/UserInformation';

const Header = () => {
  const router = useRouter();

  const setIsLogin = useSetAtom(isLoginState);

  const { isLogin } = useUserInformation();

  const handleLogin = () => {
    if (!process.env.NEXT_PUBLIC_AUTH_URL) return;
    router.replace(process.env.NEXT_PUBLIC_AUTH_URL);
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
        <Text onClick={() => router.push('/')} styleType="h4" color="black">
          sickgyun
        </Text>
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  width: 100%;
  height: 54px;
`;

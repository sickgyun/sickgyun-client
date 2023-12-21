import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { isLoginState, useUserInformation } from '@/store/UserInformation';

const Header = () => {
  const router = useRouter();

  const setIsLogin = useSetRecoilState(isLoginState);

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
    <Box borderBottom="1px solid" borderColor="gray.100" width="100%" height="54px">
      <Box
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="80%"
        height="100%"
      >
        <Text
          onClick={() => router.push('/')}
          fontSize="18px"
          fontWeight="semibold"
          _hover={{ cursor: 'pointer' }}
        >
          sickgyun
        </Text>
        {isLogin ? (
          <Button onClick={handleLogout} size="sm" variant="ghost">
            로그아웃
          </Button>
        ) : (
          <Button onClick={handleLogin} size="sm" variant="ghost">
            로그인
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;

import { SettingsIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Text, Text as TextButton } from '@chakra-ui/react';
import { useOverlay } from '@toss/use-overlay';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import UpdateProfileModal from '../UpdateProfileModal';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { isLoginState, useUserInformation } from '@/store/UserInformation';

const LoginBox = () => {
  const router = useRouter();
  const overlay = useOverlay();
  const setIsLogin = useSetRecoilState(isLoginState);
  const { isLogin, userInformation } = useUserInformation();

  const handleLogin = () => {
    if (!process.env.NEXT_PUBLIC_AUTH_URL) return;
    router.replace(process.env.NEXT_PUBLIC_AUTH_URL);
  };

  const openUpdateProfileModal = () => {
    overlay.open(({ isOpen, close }) => (
      <UpdateProfileModal isOpen={isOpen} onClose={close} />
    ));
  };
  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
    setIsLogin(false);
    router.push('/');
  };

  const handleGoJumpit = () => {
    window.open('https://www.jumpit.co.kr');
  };

  const handleGoWanted = () => {
    window.open('https://www.wanted.co.kr');
  };

  return (
    <Box
      padding="32px"
      borderRadius="8px"
      border="1px solid"
      borderColor="gray.200"
      width="500px"
      height="250px"
    >
      {isLogin ? (
        <Flex flexDirection="column" gap="24px" width="100%" height="100%">
          <Flex flexDirection="column" gap="6px">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap="2px">
                <Text as="span" fontSize="12px" color="gray.500">
                  {userInformation.cardinal}기
                </Text>
                <Text as="span" fontSize="12px" color="gray.500">
                  {userInformation.isGraduate ? '졸업생' : '학생'}
                </Text>
              </Flex>
              <SettingsIcon
                onClick={openUpdateProfileModal}
                color="gray.500"
                _hover={{ cursor: 'pointer' }}
              />
            </Flex>
            <Flex alignItems="center" gap="8px">
              <Flex alignItems="center" gap="4px">
                <Text as="span" fontSize="18px">
                  {userInformation.name}님
                </Text>
                <Text as="span" fontSize="18px">
                  {userInformation.isGraduate ? '알려주셔야죠?' : '취업하셔야죠?'}
                </Text>
              </Flex>
              <TextButton
                onClick={handleLogout}
                fontSize="16px"
                color="gray.500"
                _hover={{ cursor: 'pointer' }}
              >
                로그아웃
              </TextButton>
            </Flex>
            <Text fontSize="16px" color="gray.500">
              {userInformation.email}
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Center
              onClick={handleGoJumpit}
              padding="16px"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ cursor: 'pointer' }}
              width="48%"
              height="60px"
            >
              점핏 바로가기
            </Center>
            <Center
              onClick={handleGoWanted}
              padding="16px"
              border="1px solid"
              borderColor="gray.200"
              _hover={{ cursor: 'pointer' }}
              width="48%"
              height="60px"
            >
              원티드 바로가기
            </Center>
          </Flex>
        </Flex>
      ) : (
        <Flex alignItems="center" width="100%" height="100%">
          <Flex flexDirection="column" gap="48px" width="100%">
            <Box>
              <Text fontSize="20px">로그인하고</Text>
              <Text fontSize="20px">다양한 정보를 얻어보세요.</Text>
            </Box>
            <Button onClick={handleLogin} width="100%">
              로그인
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default LoginBox;

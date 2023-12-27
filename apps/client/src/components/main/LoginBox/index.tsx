import { Text as TextButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Flex, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import UserInformationUpdateModal from '../UserInformationUpdateModal';
import { useUserInformation } from '@/store/UserInformation';

const LoginBox = () => {
  const router = useRouter();
  const overlay = useOverlay();
  const { isLogin, userInformation } = useUserInformation();

  const handleLogin = () => {
    if (!process.env.NEXT_PUBLIC_AUTH_URL) return;
    router.replace(process.env.NEXT_PUBLIC_AUTH_URL);
  };

  const handleGoJumpit = () => {
    window.open('https://www.jumpit.co.kr');
  };

  const handleGoWanted = () => {
    window.open('https://www.wanted.co.kr');
  };

  const openUserInformationUpdateModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <UserInformationUpdateModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  useEffect(() => {
    if (userInformation.isGraduate) {
      if (!userInformation.company) {
        openUserInformationUpdateModal();
      }
    }
  }, [
    openUserInformationUpdateModal,
    userInformation.company,
    userInformation.isGraduate,
  ]);

  return (
    <StyledLoginBox>
      {isLogin ? (
        <StyledLoginSuccessBox>
          <Stack direction="vertical" spacing={6}>
            <Stack direction="horizontal" align="center" spacing={2}>
              <Text styleType="p3" color="gray500">
                {userInformation.cardinal}기
              </Text>
              <Text styleType="p3" color="gray500">
                {userInformation.isGraduate ? '졸업생' : '학생'}
              </Text>
            </Stack>
            <Stack direction="horizontal" align="center" spacing={8}>
              <Stack direction="horizontal" align="center" spacing={4}>
                <Text styleType="h4">{userInformation.name}님</Text>
                <Text styleType="h4">
                  {userInformation.isGraduate ? '알려주셔야죠?' : '취업하셔야죠?'}
                </Text>
              </Stack>
              {/* TODO: Text Button 개발 */}
              <TextButton
                onClick={openUserInformationUpdateModal}
                fontSize="16px"
                color="gray.500"
                _hover={{ cursor: 'pointer' }}
              >
                설정
              </TextButton>
            </Stack>
            <Text styleType="p1" color="gray500">
              {userInformation.email}
            </Text>
          </Stack>
          <Flex align="center" justify="space-between" style={{ width: '100%' }}>
            <StyledNavigationLinkButton onClick={handleGoJumpit}>
              <Image src="/assets/jumpit.png" width={24} height={24} alt="Jumpit" />
              <Text styleType="body2">점핏 바로가기</Text>
            </StyledNavigationLinkButton>
            <StyledNavigationLinkButton onClick={handleGoWanted}>
              <Image src="/assets/wanted.png" width={24} height={24} alt="Wanted" />
              <Text styleType="p2">원티드 바로가기</Text>
            </StyledNavigationLinkButton>
          </Flex>
        </StyledLoginSuccessBox>
      ) : (
        <StyledNotLoginBox>
          <Stack
            direction="vertical"
            justify="space-between"
            spacing={48}
            style={{ width: '100%', height: '100%' }}
          >
            <Flex direction="column">
              <Text styleType="h3">로그인하고 식견에서</Text>
              <Text styleType="h3">다양한 취업 정보를 얻어봐요!</Text>
            </Flex>
            <Button onClick={handleLogin} styleType="ghost">
              로그인
            </Button>
          </Stack>
        </StyledNotLoginBox>
      )}
    </StyledLoginBox>
  );
};

export default LoginBox;

const StyledLoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  width: 500px;
  height: 250px;
`;

const StyledLoginSuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledNotLoginBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledNavigationLinkButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px;
  border-radius: 8px;
  width: 48%;
  height: 79px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray200};

    &:hover {
      cursor: pointer;
    }
  `}
`;

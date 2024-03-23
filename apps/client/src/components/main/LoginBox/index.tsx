import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Flex, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import UserUpdateModal from '../UserUpdateModal';
import { useUser } from '@/store/User';

const LoginBox = () => {
  const router = useRouter();
  const overlay = useOverlay();
  const { isLogin, user } = useUser();

  const handleLogin = () => {
    router.push(process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL);
  };

  const handleGoJumpit = () => {
    window.open('https://www.jumpit.co.kr');
  };

  const handleGoWanted = () => {
    window.open('https://www.wanted.co.kr');
  };

  const openUserUpdateModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <UserUpdateModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  return (
    <StyledLoginBox>
      {isLogin ? (
        <StyledLoginSuccessBox>
          <Stack spacing={6}>
            <Stack direction="horizontal" align="center" spacing={2}>
              <Text fontType="p3" color="gray500">
                {user.cardinal}기
              </Text>
              <Text fontType="p3" color="gray500">
                {user.isGraduated ? '졸업생' : '학생'}
              </Text>
            </Stack>
            <Stack direction="horizontal" align="center" spacing={8}>
              <Stack direction="horizontal" align="center" spacing={4}>
                <Text fontType="h4">{user.name}님</Text>
                <Text fontType="h4">
                  {user.isGraduated ? '알려주셔야죠?' : '취업하셔야죠?'}
                </Text>
              </Stack>
              <Text
                onClick={openUserUpdateModal}
                fontType="body1"
                color="gray500"
                style={{ cursor: 'pointer' }}
              >
                설정
              </Text>
            </Stack>
            <Text fontType="p1" color="gray500">
              {user.email}
            </Text>
          </Stack>
          <Flex align="center" justify="space-between" style={{ width: '100%' }}>
            <StyledNavigationLinkButton onClick={handleGoJumpit}>
              <Image
                src="/assets/images/jumpit.png"
                width={24}
                height={24}
                alt="Jumpit"
              />
              <Text fontType="body2">점핏 바로가기</Text>
            </StyledNavigationLinkButton>
            <StyledNavigationLinkButton onClick={handleGoWanted}>
              <Image
                src="/assets/images/wanted.png"
                width={24}
                height={24}
                alt="Wanted"
              />
              <Text fontType="p2">원티드 바로가기</Text>
            </StyledNavigationLinkButton>
          </Flex>
        </StyledLoginSuccessBox>
      ) : (
        <StyledNotLoginBox>
          <Stack
            justify="space-between"
            spacing={48}
            style={{ width: '100%', height: '100%' }}
          >
            <Flex direction="column">
              <Text fontType="h3">로그인하고 식견에서</Text>
              <Text fontType="h3">다양한 취업 정보를 얻어봐요!</Text>
            </Flex>
            <Button onClick={handleLogin} styleType="secondary">
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
  width: 364px;
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

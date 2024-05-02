import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconProfileFill, IconWriteStoryFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Button, Flex, Spinner, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import { useRouter } from 'next/navigation';
import CoffeechatContactFormModal from '@/components/coffeechat/CoffeechatContactFormModal';
import { useUser } from '@/hooks/common/useUser';

const LoginBox = () => {
  const router = useRouter();
  const { user, isLogin, isLoading } = useUser();
  const overlay = useOverlay();

  const handleLogin = () => {
    router.push(process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL);
  };

  const handleGoProfileManagePage = () => {
    if (user.hasCreatedProfile) {
      router.push('/profile/update');
    } else {
      router.push('/profile/create');
    }
  };

  const openCoffeechatContactFormModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactFormModal isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledLoginBox>
      {isLoading ? (
        <Spinner />
      ) : isLogin ? (
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
            <Stack direction="horizontal" align="center" spacing={4}>
              <Text fontType="h5">{user.name}님 반가워요!</Text>
            </Stack>
            <Text fontType="p1" color="gray500">
              {user.email}
            </Text>
          </Stack>
          <Flex align="center" justify="space-between" style={{ width: '100%' }}>
            <StyledNavigationButton onClick={handleGoProfileManagePage}>
              <IconProfileFill width={24} height={24} color={colors.gray900} />
              <Text fontType="body2">
                프로필 {user.hasCreatedProfile ? '수정' : '생성'}하기
              </Text>
            </StyledNavigationButton>
            <StyledNavigationButton onClick={openCoffeechatContactFormModal}>
              <IconWriteStoryFill width={24} height={24} color={colors.gray900} />
              <Text fontType="body2">
                연락처 {user.hasNotContact ? '생성' : '수정'}하기
              </Text>
            </StyledNavigationButton>
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
              <Text fontType="h4">로그인하고 식견에서</Text>
              <Text fontType="h4">다양한 취업 정보를 얻어봐요!</Text>
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
  position: relative;
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

const StyledNavigationButton = styled.div`
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

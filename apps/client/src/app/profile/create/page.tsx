'use client';

import styled from '@emotion/styled';
import { Button, Flex, Spacer, Text } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useOverlay } from '@toss/use-overlay';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import CoffeechatContactFormModal from '@/components/coffeechat/CoffeechatContactFormModal';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileForm from '@/components/profile/ProfileForm';
import { withAuth } from '@/hocs/withAuth';
import type { CreateProfileRequest } from '@/hooks/api/profile/useCreateProfile';
import { useCreateProfile } from '@/hooks/api/profile/useCreateProfile';
import { PROFILE_LIST_QUERY_KEY } from '@/hooks/api/profile/useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from '@/hooks/api/profile/useGetProfileMine';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import { useUser } from '@/hooks/common/useUser';
import { useLogAnalyticsEvent } from '@/libs/logging';

const ProfileCreatePage = () => {
  const router = useRouter();
  const overlay = useOverlay();
  const { user } = useUser();
  const { logClickEvent } = useLogAnalyticsEvent();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit: handleCreateProfileSubmit,
    setValue,
    watch,
  } = useForm<CreateProfileRequest>();
  const { mutate: createProfileMutate } = useCreateProfile({
    onSuccess: () => {
      logClickEvent({ name: 'click_create_profile', params: watch() });
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace('/profile');
    },
  });

  const openCoffeechatContactFormModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactFormModal isOpen={isOpen} onClose={close} />
    ));
  };

  const onCreateProfile: SubmitHandler<CreateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };

    if (user.hasNotContact) {
      openCoffeechatContactFormModal();
      return;
    }

    createProfileMutate(profile);
  };

  const handleGoBackPage = () => {
    router.back();
  };

  return (
    <>
      <Header />
      <StyledProfileCreatePageLayout>
        <StyledProfileCreateHeader>
          <StyledBackButton onClick={handleGoBackPage} styleType="outline">
            뒤로가기
          </StyledBackButton>
          <Flex style={{ width: '600px', margin: '0 auto' }}>
            <Text fontType="h1">프로필 작성</Text>
          </Flex>
        </StyledProfileCreateHeader>
        <Spacer height={32} />
        <StyledProfileCreatePage>
          <ProfileForm register={register} setValue={setValue} watch={watch} />
          <Spacer height={48} />
          <Button onClick={handleCreateProfileSubmit(onCreateProfile)} size="large">
            프로필 등록
          </Button>
          <Spacer height={64} />
        </StyledProfileCreatePage>
      </StyledProfileCreatePageLayout>
      <Footer />
    </>
  );
};

export default withAuth(ProfileCreatePage);

const StyledProfileCreatePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100%;
`;

const StyledProfileCreatePage = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const StyledProfileCreateHeader = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const StyledBackButton = styled(Button)`
  position: absolute;
  left: 0;
  width: 100px;
`;

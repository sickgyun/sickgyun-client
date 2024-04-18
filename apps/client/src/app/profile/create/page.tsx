'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Text } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
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

  const onCreateProfile: SubmitHandler<CreateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };
    createProfileMutate(profile);
  };

  return (
    <>
      <Header />
      <StyledProfileCreatePageLayout>
        <StyledProfileCreatePage>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            프로필 작성
          </Text>
          <Spacer height={32} />
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

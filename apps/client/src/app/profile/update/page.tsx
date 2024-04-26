'use client';

import styled from '@emotion/styled';
import { Button, Flex, Spacer, Spinner, Text } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileForm from '@/components/profile/ProfileForm';
import { withAuth } from '@/hocs/withAuth';
import { PROFILE_QUERY_KEY } from '@/hooks/api/profile/useGetProfile';
import { PROFILE_LIST_QUERY_KEY } from '@/hooks/api/profile/useGetProfileList';
import {
  PROFILE_MINE_QUERY_KEY,
  useGetProfileMine,
} from '@/hooks/api/profile/useGetProfileMine';
import { useUpdateProfile } from '@/hooks/api/profile/useUpdateProfile';
import type { UpdateProfileRequest } from '@/hooks/api/profile/useUpdateProfile';
import { useUser } from '@/hooks/common/useUser';
import { useLogAnalyticsEvent } from '@/libs/logging';

const ProfileUpdatePage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit: handleUpdateProfileSubmit,
    setValue,
    watch,
  } = useForm<UpdateProfileRequest>();
  const { mutate: updateProfileMutate } = useUpdateProfile({
    onSuccess: () => {
      logClickEvent({ name: 'click_update_profile', params: watch() });
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_QUERY_KEY] });
      router.replace('/profile');
    },
  });
  const { profileMine } = useGetProfileMine();

  const onUpdateProfile: SubmitHandler<UpdateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };
    updateProfileMutate(profile);
  };

  const handleGoBackPage = () => {
    router.back();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <Spacer height={32} />
      <StyledProfileUpdatePageLayout>
        <StyledProfileUpdateHeader>
          <StyledBackButton onClick={handleGoBackPage} styleType="outline">
            뒤로가기
          </StyledBackButton>
          <Flex style={{ width: '600px', margin: '0 auto' }}>
            <Text fontType="h1">프로필 수정</Text>
          </Flex>
        </StyledProfileUpdateHeader>
        <Spacer height={32} />
        <StyledProfileUpdatePage>
          <ProfileForm
            register={register}
            defaultValues={profileMine}
            setValue={setValue}
            watch={watch}
          />
          <Spacer height={48} />
          <Button onClick={handleUpdateProfileSubmit(onUpdateProfile)} size="large">
            프로필 수정
          </Button>
          <Spacer height={64} />
        </StyledProfileUpdatePage>
      </StyledProfileUpdatePageLayout>
      <Footer />
    </>
  );
};

export default withAuth(ProfileUpdatePage);

const StyledProfileUpdatePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100%;
`;

const StyledProfileUpdateHeader = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const StyledBackButton = styled(Button)`
  position: absolute;
  left: 0;
  width: 100px;
`;

const StyledProfileUpdatePage = styled.div`
  width: 600px;
  margin: 0 auto;
`;

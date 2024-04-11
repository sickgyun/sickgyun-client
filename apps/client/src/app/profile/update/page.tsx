'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Spinner, Text } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileForm from '@/components/profile/ProfileForm';
import { withAuth } from '@/hocs/withAuth';
import { useGetProfileMine } from '@/hooks/api/profile/useGetProfileMine';
import { useUpdateProfile } from '@/hooks/api/profile/useUpdateProfile';
import type { UpdateProfileRequest } from '@/hooks/api/profile/useUpdateProfile';
import { useUser } from '@/hooks/common/useUser';

const ProfileUpdatePage = () => {
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit: handleUpdateProfileSubmit,
    setValue,
    watch,
  } = useForm<UpdateProfileRequest>();
  const { mutate: updateProfileMutate } = useUpdateProfile();
  const { profileMine } = useGetProfileMine();

  const onUpdateProfile: SubmitHandler<UpdateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };
    updateProfileMutate(profile);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <StyledProfileUpdatePageLayout>
        <StyledProfileUpdatePage onSubmit={handleUpdateProfileSubmit(onUpdateProfile)}>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            프로필 수정
          </Text>
          <Spacer height={32} />
          <ProfileForm
            register={register}
            defaultValues={profileMine}
            setValue={setValue}
            watch={watch}
          />
          <Spacer height={48} />
          <Button type="submit" size="large">
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

const StyledProfileUpdatePage = styled.form`
  width: 600px;
  margin: 0 auto;
`;

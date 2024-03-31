'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileForm from '@/components/profile/ProfileForm';
import { useGetProfileMine } from '@/hooks/api/profile/useGetProfileMine';
import { useUpdateProfile } from '@/hooks/api/profile/useUpdateProfile';
import type { UpdateProfileRequest } from '@/hooks/api/profile/useUpdateProfile';
import { useUser } from '@/hooks/common/useUser';

const ProfileUpdatePage = () => {
  const router = useRouter();
  const user = useUser();
  const { register, handleSubmit: handleUpdateProfileSubmit } =
    useForm<UpdateProfileRequest>();
  const { mutate: updateProfileMutate } = useUpdateProfile();
  const { profileMine } = useGetProfileMine();

  const onUpdateProfile: SubmitHandler<UpdateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };
    updateProfileMutate(profile);
  };

  const handleProfileUpdate = () => {
    handleUpdateProfileSubmit(onUpdateProfile);
    router.replace('/profile');
  };

  return (
    <>
      <Header />
      <StyledProfileUpdatePageLayout>
        <Spacer height={32} />
        <StyledProfileFormContainer>
          <Text fontType="h1" color="gray900">
            프로필 수정
          </Text>
          <Spacer height={32} />
          <ProfileForm user={user} register={register} defaultValues={profileMine} />
          <Spacer height={48} />
          <Button onClick={handleProfileUpdate} size="large">
            프로필 수정
          </Button>
        </StyledProfileFormContainer>
        <Spacer height={64} />
      </StyledProfileUpdatePageLayout>
      <Footer />
    </>
  );
};

export default ProfileUpdatePage;

const StyledProfileUpdatePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100%;
`;

const StyledProfileFormContainer = styled.div`
  width: 600px;
  margin: 0 auto;
`;

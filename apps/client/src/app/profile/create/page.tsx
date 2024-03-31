'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Text } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileForm from '@/components/profile/ProfileForm';
import type { CreateProfileRequest } from '@/hooks/api/profile/useCreateProfile';
import { useCreateProfile } from '@/hooks/api/profile/useCreateProfile';
import { useUser } from '@/hooks/common/useUser';

const ProfileCreatePage = () => {
  const user = useUser();
  const { register, handleSubmit: handleCreateProfileSubmit } =
    useForm<CreateProfileRequest>();
  const { mutate: createProfileMutate } = useCreateProfile();

  const onCreateProfile: SubmitHandler<CreateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };
    createProfileMutate(profile);
  };

  return (
    <>
      <Header />
      <StyledProfileCreatePageLayout>
        <Spacer height={32} />
        <StyledProfileFormContainer onSubmit={handleCreateProfileSubmit(onCreateProfile)}>
          <Text fontType="h1" color="gray900">
            프로필 작성
          </Text>
          <Spacer height={32} />
          <ProfileForm user={user} register={register} />
          <Spacer height={48} />
          <Button type="submit" size="large">
            프로필 등록
          </Button>
        </StyledProfileFormContainer>
        <Spacer height={64} />
      </StyledProfileCreatePageLayout>
      <Footer />
    </>
  );
};

export default ProfileCreatePage;

const StyledProfileCreatePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100%;
`;

const StyledProfileFormContainer = styled.form`
  width: 600px;
  margin: 0 auto;
`;

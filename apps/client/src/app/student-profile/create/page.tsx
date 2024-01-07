'use client';

import styled from '@emotion/styled';
import { Button, Input, Select, Stack, Text } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useCreateStudentProfileMutation } from '@/hooks/api/student-profile/useCreateStudentProfileMutation';
import { useUserInformation } from '@/store/UserInformation';

type StudentProfileCreateFormInput = {
  githubId?: string;
  email?: string;
  bio?: string;
  position: string;
  company?: string;
};

const StudentProfileCreatePage = () => {
  const { userInformation } = useUserInformation();
  const { register, handleSubmit: handleCreateStudentProfileSubmit } =
    useForm<StudentProfileCreateFormInput>();

  const { mutate: createStudentProfileMutate } = useCreateStudentProfileMutation();

  const onCreateStudentProfileSubmit: SubmitHandler<StudentProfileCreateFormInput> = (
    data
  ) => {
    const createStudentProfileRequstData = {
      userCode: userInformation.userCode,
      profileUrl: userInformation.profileUrl,
      name: userInformation.name,
      cardinal: userInformation.cardinal,
      isGraduate: userInformation.isGraduate,
      bio: data.bio,
      githubId: data.githubId,
      email: data.email,
      position: data.position,
      company: data.company,
    };

    createStudentProfileMutate(createStudentProfileRequstData);
  };

  return (
    <>
      <Header />
      <StyledStudentProfileCreatePageLayout>
        <StyledStudentProfileCreatePage>
          <StyledStudentProfileCreateForm
            onSubmit={handleCreateStudentProfileSubmit(onCreateStudentProfileSubmit)}
          >
            <Text fontType="h2">프로필 등록</Text>
            <Stack spacing={24}>
              <Stack direction="horizontal" spacing={16}>
                <Input
                  label="이름"
                  value={userInformation.name}
                  placeholder="이름을 입력해주세요."
                  disabled
                />
                <Input
                  label="깃허브 아이디"
                  defaultValue={userInformation.githubId}
                  placeholder="깃허브 아이디를 입력해주세요."
                  {...register('githubId')}
                />
              </Stack>
              <Input
                label="이메일"
                defaultValue={userInformation.email}
                placeholder="이메일을 적어주세요."
                {...register('email')}
              />
              <Select label="포지션" {...register('position')}>
                <option value="FRONTEND">프론트엔드</option>
                <option value="BACKEND">백엔드</option>
                <option value="DEVOPS">데브옵스</option>
                <option value="APP">앱</option>
                <option value="DESIGNER">디자이너</option>
              </Select>
              <Input
                label="소개 말"
                placeholder="소개 말을 적어주세요."
                {...register('bio')}
              />
              {userInformation.isGraduate && (
                <Input
                  label="회사"
                  placeholder="회사명을 입력해주세요."
                  {...register('company')}
                />
              )}
            </Stack>
            <Button type="submit" size="large">
              등록
            </Button>
          </StyledStudentProfileCreateForm>
        </StyledStudentProfileCreatePage>
      </StyledStudentProfileCreatePageLayout>
      <Footer />
    </>
  );
};

export default StudentProfileCreatePage;

const StyledStudentProfileCreatePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  min-height: 100vh;
`;

const StyledStudentProfileCreatePage = styled.div`
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 64px;
  width: 38%;
`;

const StyledStudentProfileCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

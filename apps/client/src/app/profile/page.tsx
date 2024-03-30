'use client';

import styled from '@emotion/styled';
import { Button, Stack } from '@sickgyun/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileActionButton from '@/components/profile/ProfileActionButton';
import ProfileList from '@/components/profile/ProfileList';
import { MAJOR_LIST } from '@/constants/profile';
import { useUser } from '@/store/user';

const StudentProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { isLogin, user } = useUser();
  const majorQueryParameter = params.get('major');

  const handleMajorButtonClick = (major: string) => {
    router.replace(`/profile?major=${major}`);
  };

  return (
    <>
      <Header />
      <StyledStudentProfilePageLayout>
        <StyledStudentProfilePage>
          <Stack
            direction="horizontal"
            align="center"
            spacing={24}
            style={{ marginBottom: '48px' }}
          >
            {MAJOR_LIST.map((major) => (
              <Button
                styleType="quaternary"
                onClick={() => handleMajorButtonClick(major.queryParameter)}
                isActive={major.queryParameter === majorQueryParameter}
              >
                {major.name}
              </Button>
            ))}
          </Stack>
          <ProfileList major={majorQueryParameter} />
        </StyledStudentProfilePage>
      </StyledStudentProfilePageLayout>
      <Footer />
      {isLogin ? (
        <ProfileActionButton actionType={user.hasCreatedProfile ? 'update' : 'create'} />
      ) : null}
    </>
  );
};

export default StudentProfilePage;

const StyledStudentProfilePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  min-height: 100vh;
`;

const StyledStudentProfilePage = styled(Stack)`
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 64px;
  margin-bottom: 48px;
  width: 80%;
`;

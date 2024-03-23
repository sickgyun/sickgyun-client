'use client';

import styled from '@emotion/styled';
import { Button, Stack } from '@sickgyun/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import StudentProfileActionButton from '@/components/student-profile/StudentProfileActionButton';
import StudentProfileList from '@/components/student-profile/StudentProfileList';
import { MAJOR_LIST } from '@/constants/profile';
import { useStudentProfile } from '@/store/StudentProfile';
import { useUser } from '@/store/User';

const StudentProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { isLogin } = useUser();
  const { hasStudentProfile } = useStudentProfile();
  const majorQueryParameter = params.get('major');

  const handleMajorButtonClick = (major: string) => {
    router.replace(`/student-profile?major=${major}`);
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
          <StudentProfileList major={majorQueryParameter} />
        </StyledStudentProfilePage>
      </StyledStudentProfilePageLayout>
      <Footer />
      {isLogin ? (
        <StudentProfileActionButton
          actionType={hasStudentProfile ? 'update' : 'create'}
        />
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

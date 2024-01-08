'use client';

import styled from '@emotion/styled';
import { Button, Stack } from '@sickgyun/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/common/Footer';
import StudentProfileActionButton from '@/components/student-profile/StudentProfileActionButton';
import StudentProfileList from '@/components/student-profile/StudentProfileList';
import { POSITION_LIST } from '@/constants/common';
import Layout from '@/layouts/Layout';
import { useStudentProfile } from '@/store/StudentProfile';
import { useUserInformation } from '@/store/UserInformation';

const StudentProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const positionQueryParams = params.get('position');

  if (!positionQueryParams) {
    throw new Error('잘못된 접근 방식입니다.');
  }

  const { isLogin } = useUserInformation();
  const { hasStudentProfile } = useStudentProfile();

  return (
    <Layout isHeader isFooter>
      <StyledStudentProfilePageLayout>
        <StyledStudentProfilePage>
          <StyledBannerImage src="/assets/mock_banner.jpeg" alt="Banner" />
          <Stack
            direction="horizontal"
            align="center"
            spacing={24}
            style={{ marginBottom: '48px' }}
          >
            {POSITION_LIST.map((position) => (
              <Button
                styleType="quaternary"
                onClick={() =>
                  router.replace(`/student-profile?position=${position.queryParams}`)
                }
                isActive={position.queryParams === positionQueryParams}
              >
                {position.name}
              </Button>
            ))}
          </Stack>
          <StudentProfileList positionQueryParams={positionQueryParams} />
        </StyledStudentProfilePage>
      </StyledStudentProfilePageLayout>
      <Footer />
      {isLogin ? (
        <StudentProfileActionButton
          actionType={hasStudentProfile ? 'update' : 'create'}
        />
      ) : null}
    </Layout>
  );
};

export default StudentProfilePage;

const StyledStudentProfilePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  min-height: 100vh;
`;

const StyledStudentProfilePage = styled.div`
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 64px;
  width: 80%;
`;

const StyledBannerImage = styled.img`
  margin-bottom: 48px;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

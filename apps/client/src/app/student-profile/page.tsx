'use client';

import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Button, Stack } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import StudentProfileCreateButton from '@/components/student-profile/StudentProfileCreateButton';
import StudentProfileCreateModal from '@/components/student-profile/StudentProfileCreateModal';
import StudentProfileList from '@/components/student-profile/StudentProfileList';
import StudentProfileUpdateButton from '@/components/student-profile/StudentProfileUpdateButton';
import StudentProfileUpdateModal from '@/components/student-profile/StudentProfileUpdateModal';
import { POSITION_LIST } from '@/constants/common';
import { useStudentProfile } from '@/store/StudentProfile';
import { useUserInformation } from '@/store/UserInformation';

const StudentProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const overlay = useOverlay();

  const positionQueryParams = params.get('position');

  if (!positionQueryParams) {
    throw new Error('잘못된 접근 방식입니다.');
  }

  const { isLogin } = useUserInformation();
  const { hasStudentProfile } = useStudentProfile();

  const openStudentProfileCreateModal = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileCreateModal isOpen={isOpen} onClose={close} />
    ));
  };

  const openStudentProfileUpdateModal = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileUpdateModal isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <>
      <Header />
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
          <Suspense fallback={<Spinner color="primary" />}>
            <StudentProfileList positionQueryParams={positionQueryParams} />
          </Suspense>
        </StyledStudentProfilePage>
      </StyledStudentProfilePageLayout>
      <Footer />
      {isLogin ? (
        hasStudentProfile ? (
          <StudentProfileUpdateButton onClick={openStudentProfileUpdateModal} />
        ) : (
          <StudentProfileCreateButton onClick={openStudentProfileCreateModal} />
        )
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

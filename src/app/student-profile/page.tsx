'use client';

import { Box, Button, Image, Spinner } from '@chakra-ui/react';
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
      <Box backgroundColor="white" width="100vw" minHeight="100vh">
        <Box margin="0 auto" paddingTop="48px" paddingBottom="64px" width="80%">
          <Image
            src="/assets/mock_banner.jpeg"
            marginBottom="48px"
            borderRadius="8px"
            objectFit="cover"
            width="100%"
            height="250px"
            alt="Banner"
          />
          <Box display="flex" alignItems="center" gap="8px" marginBottom="48px">
            {POSITION_LIST.map(position => (
              <Button
                onClick={() => router.replace(`/student-profile?position=${position.queryParams}`)}
                variant="ghost"
                fontWeight="medium"
                backgroundColor="white"
                color={position.queryParams === positionQueryParams ? 'primary' : 'gray.700'}
                _hover={{ color: 'primary', backgroundColor: 'gray.100' }}
              >
                {position.name}
              </Button>
            ))}
          </Box>
          <Suspense fallback={<Spinner color="primary" />}>
            <StudentProfileList positionQueryParams={positionQueryParams} />
          </Suspense>
        </Box>
      </Box>
      <Footer />
      {isLogin ? (
        // 프로필을 등록했으면 프로필 수정을 보여주고 아니면 프로필 추가를 보여줌
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

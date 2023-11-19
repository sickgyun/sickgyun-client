'use client';

import { Box, Button, Grid, Image, Text } from '@chakra-ui/react';
import { useOverlay } from '@toss/use-overlay';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import StudentProfileCard from '@/components/StudentProfileCard';
import StudentProfileCreateButton from '@/components/StudentProfileCreateButton';
import StudentProfileCreateModal from '@/components/StudentProfileCreateModal';
import StudentProfileDetailModal from '@/components/StudentProfileDetailModal';
import StudentProfileUpdateButton from '@/components/StudentProfileUpdateButton';
import StudentProfileUpdateModal from '@/components/StudentProfileUpdateModal';
import { POSITION_LIST } from '@/constants/common';
import { useGetStudentProfileList } from '@/hooks/api/student-profile/useGetStudentProfileList';
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
  const { studentProfileList } = useGetStudentProfileList(positionQueryParams);

  const openStudentProfileCreateModal = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileCreateModal isOpen={isOpen} onClose={close} />
    ));
  };

  const openStudentProfileDetailModal = (userCode: number) => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileDetailModal isOpen={isOpen} onClose={close} userCode={userCode} />
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
            {POSITION_LIST.map((position) => (
              <Button
                onClick={() =>
                  router.replace(`/student-profile?position=${position.queryParams}`)
                }
                variant="ghost"
                fontWeight="medium"
                backgroundColor="white"
                color={
                  position.queryParams === positionQueryParams ? 'primary' : 'gray.700'
                }
                _hover={{ color: 'primary', backgroundColor: 'gray.100' }}
              >
                {position.name}
              </Button>
            ))}
          </Box>
          {studentProfileList.length > 0 ? (
            <Grid templateColumns="repeat(2, 1fr)" gap="32px">
              {studentProfileList.map((studentProfile) => (
                <StudentProfileCard
                  onClick={() => openStudentProfileDetailModal(studentProfile.userCode)}
                  name={studentProfile.name}
                  profileUrl={studentProfile.profileUrl}
                  cardinal={studentProfile.cardinal}
                  position={studentProfile.position}
                  bio={studentProfile.bio}
                  company={studentProfile.company}
                />
              ))}
            </Grid>
          ) : (
            <Text fontSize="20px" fontWeight="semibold">
              앗! 해당 분야의 학생이 없어요..
            </Text>
          )}
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

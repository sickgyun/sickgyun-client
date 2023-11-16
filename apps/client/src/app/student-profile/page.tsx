'use client';

import { Box, Button, Grid, Image } from '@chakra-ui/react';
import { useOverlay } from '@toss/use-overlay';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import StudentProfileCard from '@/components/StudentProfileCard';
import StudentProfileCreateButton from '@/components/StudentProfileCreateButton';
import StudentProfileCreateModal from '@/components/StudentProfileCreateModal';
import StudentProfileDetailModal from '@/components/StudentProfileDetailModal';
import { POSITION_LIST } from '@/constants/common';
import { useGetStudentProfileList } from '@/hooks/api/student-profile/useGetStudentProfileList';

const StudentProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const overlay = useOverlay();

  const positionQueryParams = params.get('position');

  if (!positionQueryParams) {
    throw new Error('잘못된 접근 방식입니다.');
  }

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
        </Box>
      </Box>
      <Footer />
      <StudentProfileCreateButton onClick={openStudentProfileCreateModal} />
    </>
  );
};

export default StudentProfilePage;

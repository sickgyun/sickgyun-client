'use client';

import { Box, Button, Grid, Image } from '@chakra-ui/react';
import { useOverlay } from '@toss/use-overlay';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import SeniorProfileCard from '@/components/SeniorProfileCard';
import SeniorProfileDetailModal from '@/components/SeniorProfileDetailModal';
import SeniorProfileRegisterButton from '@/components/SeniorProfileRegisterButton';
import SeniorProfileRegisterModal from '@/components/SeniorProfileRegisterModal';
import { POSITION_LIST } from '@/constants/common';
import { useGetSeniorProfileList } from '@/hooks/api/senior/useGetSeniorProfileList';
import { useUserInformation } from '@/store/UserInformation';

const SeniorPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const overlay = useOverlay();

  const positionQueryParams = params.get('position');

  if (!positionQueryParams) {
    throw new Error('잘못된 접근 방식입니다.');
  }

  const { userInformation } = useUserInformation();
  const { seniorProfileList } = useGetSeniorProfileList(positionQueryParams);

  const openSeniorProfileRegisterModal = () => {
    overlay.open(({ isOpen, close }) => (
      <SeniorProfileRegisterModal isOpen={isOpen} onClose={close} />
    ));
  };

  const openSeniorProfileDetailModal = (userCode: number) => {
    overlay.open(({ isOpen, close }) => (
      <SeniorProfileDetailModal isOpen={isOpen} onClose={close} userCode={userCode} />
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
                onClick={() => router.replace(`/senior?position=${position.queryParams}`)}
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
            {seniorProfileList.map((seniorProfile) => (
              <SeniorProfileCard
                onClick={() => openSeniorProfileDetailModal(seniorProfile.userCode)}
                name={seniorProfile.name}
                profileUrl={seniorProfile.profileUrl}
                cardinal={seniorProfile.cardinal}
                position={seniorProfile.position}
                bio={seniorProfile.bio}
                company={seniorProfile.company}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
      {userInformation.isGraduate && (
        <SeniorProfileRegisterButton onClick={openSeniorProfileRegisterModal} />
      )}
    </>
  );
};

export default SeniorPage;

'use client';

import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import LoginBox from '@/components/LoginBox';
import MouCompanyCard from '@/components/MouCompanyCard';

const MainPage = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Box width="100vw" backgroundColor="white">
        <Box margin="0 auto" paddingTop="48px" paddingBottom="64px" width="80%">
          {/* 로그인 & 배너 섹션 */}
          <Box display="flex" gap="36px" alignItems="center" marginBottom="64px">
            <Image
              src="/assets/mock_banner.jpeg"
              objectFit="cover"
              borderRadius="8px"
              width="100%"
              height="250px"
              alt="Banner"
            />
            {/* 로그인 박스 */}
            <LoginBox />
          </Box>
          {/* 직군별 리스트 */}
          <Flex flexDirection="column" gap="18px">
            <Text
              onClick={() => router.push('/senior/all')}
              fontSize="18px"
              fontWeight="semibold"
              _hover={{ cursor: 'pointer' }}
            >
              직군별 선배들을 찾아봐요!
            </Text>
            <Box display="flex" justifyContent="space-between" marginBottom="64px">
              {['전체', '프론트엔드', '백엔드', '데브옵스', '앱', '디자이너'].map(
                (position) => (
                  <Center
                    onClick={() => router.push(`/senior/${position}`)}
                    transition="all 0.25s ease"
                    borderRadius="8px"
                    width="200px"
                    height="120px"
                    _hover={{
                      backgroundColor: 'gray.50',
                      cursor: 'pointer',
                    }}
                  >
                    {position}
                  </Center>
                )
              )}
            </Box>
          </Flex>
          {/* 협약 회사 목록 */}
          <Box display="flex" flexDirection="column" gap="18px">
            <Text
              onClick={() => router.push('/mou-company')}
              fontSize="18px"
              fontWeight="semibold"
              _hover={{ cursor: 'pointer' }}
            >
              우리 학교와 협약되어 있는 회사들이에요!
            </Text>
            <Grid templateColumns="repeat(3, 2fr)" gap="16px">
              {Array(6)
                .fill('')
                .map(() => (
                  <MouCompanyCard />
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;

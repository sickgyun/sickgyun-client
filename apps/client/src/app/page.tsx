'use client';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import LoginBox from '@/components/LoginBox';
import MouCompanyCard from '@/components/MouCompanyCard';
import { POSITION_LIST } from '@/constants/common';

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
            <Text fontSize="22px" fontWeight="bold">
              포지션 별 선배
            </Text>
            <Box display="flex" justifyContent="space-between" marginBottom="64px">
              {POSITION_LIST.map((position) => (
                <Center
                  onClick={() => router.push(`/senior?position=${position.queryParams}`)}
                  display="flex"
                  flexDirection="column"
                  gap="12px"
                  transition="all 0.25s ease"
                  borderRadius="8px"
                  width="200px"
                  height="120px"
                  _hover={{
                    backgroundColor: 'gray.50',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={`/assets/position/${position.queryParams}.png`}
                    height="48px"
                    alt="Position"
                  />
                  <Text fontSize="16px" fontWeight="semibold">
                    {position.name}
                  </Text>
                </Center>
              ))}
            </Box>
          </Flex>
          {/* 협약 회사 목록 */}
          <Flex flexDirection="column" gap="18px">
            <Text fontSize="22px" fontWeight="bold">
              우리 학교 협약 회사가 궁금하다면?
            </Text>
            <Box
              onClick={() => router.push('/mou-company')}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0px 24px"
              backgroundColor="gray.50"
              borderRadius="8px"
              _hover={{ cursor: 'pointer' }}
              width="100%"
              height="56px"
            >
              <Text fontSize="14px" fontWeight="semibold">
                🏢 부산소프트웨어마이스터고등학교의 협약 회사를 알아보러 가세요!
              </Text>
              <Flex alignItems="center">
                <Text fontSize="12px" color="gray.700">
                  협약 회사 알아보러가기
                </Text>
                <ChevronRightIcon color="gray.700" />
              </Flex>
            </Box>
            <Grid templateColumns="repeat(3, 2fr)" gap="16px">
              {Array(6)
                .fill('')
                .map(() => (
                  <MouCompanyCard />
                ))}
            </Grid>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;

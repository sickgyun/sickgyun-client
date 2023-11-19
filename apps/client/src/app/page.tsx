'use client';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import JobPostingCard from '@/components/JobPostingCard';
import LoginBox from '@/components/LoginBox';
import MouCompanyCard from '@/components/MouCompanyCard';
import { POSITION_LIST } from '@/constants/common';
import { useGetJobPostingList } from '@/hooks/api/job-posting/useGetJobPostingList';

const MainPage = () => {
  const router = useRouter();

  const { jobPostingList } = useGetJobPostingList();

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
          <Flex flexDirection="column" gap="18px" marginBottom="64px">
            <Text fontSize="22px" fontWeight="bold">
              진로, 취업 관련 고민을 같이 말할 선배, 친구를 찾아봐요!
            </Text>
            <Box display="flex" justifyContent="space-between">
              {POSITION_LIST.map((position) => (
                <Center
                  onClick={() =>
                    router.push(`/student-profile?position=${position.queryParams}`)
                  }
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
          <Flex flexDirection="column" gap="18px" marginBottom="64px">
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
          <Flex flexDirection="column" gap="18px" marginBottom="64px">
            <Text fontSize="22px" fontWeight="bold">
              채용중인 회사에요!
            </Text>
            <Grid templateColumns="repeat(4, 2fr)" gap="24px">
              {jobPostingList.map((jobPosting) => (
                <JobPostingCard
                  title={jobPosting.title}
                  imageUrl={jobPosting.imageUrl}
                  companyName={jobPosting.companyName}
                  detailLink={jobPosting.detailLink}
                />
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

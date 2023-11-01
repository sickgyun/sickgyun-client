'use client';

import { Box, Button, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';

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
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="48px"
              padding="32px"
              borderRadius="8px"
              border="1px solid"
              borderColor="gray.200"
              width="500px"
              height="250px"
            >
              <div>
                <Text as="p" fontSize="20px">
                  로그인하고
                </Text>
                <Text as="p" fontSize="20px">
                  다양한 정보를 얻어보세요.
                </Text>
              </div>
              <Button width="100%">로그인</Button>
            </Box>
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
                  <Box
                    onClick={() =>
                      window.open(
                        'https://www.jobkorea.co.kr/company/43275639?utm_term=&utm_source=pmax&utm_medium=display&cmpid=pmax&gad_source=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM03yJKeELO6J4otOId4BL8r1rXsuC_v-fcgyqsLPZ9OSe1KW67LLtBoCzn0QAvD_BwE'
                      )
                    }
                    display="flex"
                    alignItems="center"
                    gap="12px"
                    padding="16px"
                    transition="all 0.25s ease"
                    borderBottom="1px solid"
                    borderColor="gray.50"
                    _hover={{
                      backgroundColor: 'gray.50',
                      cursor: 'pointer',
                      borderRadius: '8px',
                    }}
                    height="80px"
                  >
                    <Image
                      src="/assets/mock_company.webp"
                      width="50px"
                      height="50px"
                      borderRadius="8px"
                      alt="Company"
                    />
                    <Flex flexDirection="column" alignItems="flex-start">
                      <Text fontSize="16px" fontWeight="semibold">
                        카카오스타일(Kakao Style)
                      </Text>
                      <Text color="gray.500" fontSize="12px" fontWeight="medium">
                        IT.컨텐츠
                      </Text>
                    </Flex>
                  </Box>
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

'use client';

import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import { Box, Text, Flex, Center, Button, Image, Wrap, Grid } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw" height="110vh" backgroundColor="white">
        <Box margin="0 auto" paddingTop="30px" width="80%">
          {/* 로그인 & 배너 섹션 */}
          <Flex gap="36px" alignItems="center" marginBottom="48px">
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
          </Flex>
          {/* 직군별 리스트 */}
          <Flex justifyContent="space-between" marginBottom="36px">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Center
                  transition="all 0.25s ease"
                  borderRadius="8px"
                  width="200px"
                  height="120px"
                  _hover={{
                    backgroundColor: 'gray.50',
                    cursor: 'pointer',
                  }}
                >
                  Frontend
                </Center>
              ))}
          </Flex>
          {/* 선배들이 간 회사 목록 */}
          <Box display="flex" flexDirection="column" gap="18px">
            <Text fontSize="18px" fontWeight="semibold">
              선배들이 간 회사 목록이에요!
            </Text>
            <Grid templateColumns="repeat(3, 2fr)" gap="16px">
              {Array(6)
                .fill('')
                .map((_, i) => (
                  <Box
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
                      src="/assets/mock_company_profile.webp"
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

export default Home;

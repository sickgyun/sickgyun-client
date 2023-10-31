'use client';

import { Header } from '@/components/common';
import { Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw" height="100vh" backgroundColor="white">
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
          <Flex justifyContent="space-between">
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
        </Box>
      </Box>
    </>
  );
};

export default Home;

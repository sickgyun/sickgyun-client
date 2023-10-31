'use client';

import { Header } from '@/components/common';
import { Box, Text, Flex, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Header />
      <Box width="100vw" height="100vh" backgroundColor="white">
        <Box margin="0 auto" paddingTop="30px" width="80%">
          {/* 직군별 리스트 */}
          <Box display="flex" justifyContent="center">
            <Flex gap="16px">
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
                      margin: '0 auto',
                    }}
                  >
                    Frontend
                  </Center>
                ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

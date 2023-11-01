'use client';

import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';

const SeniorPage = () => {
  return (
    <>
      <Header />
      <Box width="100vw" backgroundColor="white">
        {/* 바 */}
        <Box margin="0 auto" paddingTop="48px" width="80%">
          <Grid templateColumns="repeat(2, 1fr)" gap="32px" marginBottom="64px">
            {Array(10)
              .fill('')
              .map(() => (
                // 선배 카드
                <Box
                  transition="all 0.25s ease"
                  display="flex"
                  alignItems="flex-start"
                  gap="24px"
                  padding="24px"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="8px"
                  _hover={{
                    backgroundColor: 'gray.50',
                    cursor: 'pointer',
                  }}
                  height="144px"
                >
                  <Image
                    src="/assets/mock_senior.jpeg"
                    borderRadius="8px"
                    width="100px"
                    height="100px"
                    alt="Senior"
                  />
                  <Flex flexDirection="column" gap="10px">
                    <div>
                      <Flex alignItems="center" gap="6px">
                        <Text fontSize="24px" fontWeight="semibold">
                          김석진
                        </Text>
                        <Text fontSize="16px" color="gray.900" fontWeight="medium">
                          2기 - 토스페이먼츠
                        </Text>
                      </Flex>
                      <Text maxWidth="100%" color="gray.600" fontSize="14px">
                        즐거움을 토대로 토대를 만드는 토나오는 개발자
                      </Text>
                    </div>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="gray.700"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="18px"
                      fontSize="14px"
                      fontWeight="medium"
                      width="80px"
                      height="24px"
                    >
                      프론트엔드
                    </Box>
                  </Flex>
                </Box>
              ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SeniorPage;

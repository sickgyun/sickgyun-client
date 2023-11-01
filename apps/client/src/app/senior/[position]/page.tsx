'use client';

import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import type { Position } from '@/types';

const POSITION_LIST: Position[] = [
  '전체',
  '프론트엔드',
  '백엔드',
  '데브옵스',
  '앱',
  '디자이너',
];

type SeniorProps = {
  params: { position: Position };
};

const SeniorPage = ({ params }: SeniorProps) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Box width="100vw" backgroundColor="white">
        <Box margin="0 auto" paddingTop="48px" paddingBottom="64px" width="80%">
          <Image
            src="/assets/mock_banner.jpeg"
            marginBottom="48px"
            borderRadius="8px"
            objectFit="cover"
            width="100%"
            height="250px"
          />
          <Box display="flex" alignItems="center" gap="16px" marginBottom="48px">
            {POSITION_LIST.map((position) => (
              <Link
                onClick={() => router.push(`/senior/${position}`)}
                color={decodeURI(params.position) === position ? 'primary' : 'gray.700'}
                _hover={{ color: 'primary' }}
              >
                {position}
              </Link>
            ))}
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap="32px">
            {Array(10)
              .fill('')
              .map(() => (
                // 선배 카드
                <Box
                  transition="all 0.25s ease"
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
                  <Flex gap="24px" height="100%">
                    <Image
                      src="/assets/mock_senior.jpeg"
                      borderRadius="8px"
                      width="95px"
                      height="100%"
                      alt="Senior"
                    />
                    <Flex flexDirection="column" justifyContent="center" height="100%">
                      <Flex flexDirection="column" gap="6px">
                        <Flex flexDirection="column">
                          <Flex alignItems="center" gap="6px">
                            <Text fontSize="24px" fontWeight="semibold">
                              김석진
                            </Text>
                            <Text fontSize="16px" color="gray.900" fontWeight="medium">
                              2기 - 토스페이먼츠
                            </Text>
                          </Flex>
                          <Text maxWidth="100%" color="gray.600" fontSize="14px">
                            즐거움을 토대로 토대를 만드는 도리"토스"를 좋아하는 개발자
                          </Text>
                        </Flex>
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
                    </Flex>
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

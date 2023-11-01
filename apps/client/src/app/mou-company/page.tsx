'use client';

import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import type { Department } from '@/types';

const DEPARTMENT_LIST: Department[] = ['전체', '소프트웨어개발과', '임베디드과'];

const MouCompanyPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('전체');

  return (
    <>
      <Header />
      <Box width="100vw" backgroundColor="white">
        <Box margin="0 auto" paddingTop="48px" paddingBottom="64px" width="80%">
          <Box display="flex" alignItems="center" gap="16px" marginBottom="48px">
            {DEPARTMENT_LIST.map((department) => (
              <Link
                onClick={() => setSelectedDepartment(department)}
                color={selectedDepartment === department ? 'primary' : 'gray.700'}
                _hover={{ color: 'primary' }}
              >
                {department}
              </Link>
            ))}
          </Box>
          <Grid templateColumns="repeat(3, 2fr)" gap="16px">
            {Array(20)
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
      <Footer />
    </>
  );
};

export default MouCompanyPage;

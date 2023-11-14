'use client';

import { Box, Grid, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import MouCompanyCard from '@/components/MouCompanyCard';
import { DEPARTMENT_LIST } from '@/constants/common';
import type { Department } from '@/types';

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
                <MouCompanyCard />
              ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MouCompanyPage;
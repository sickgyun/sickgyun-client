'use client';

import { Box, Grid, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/common';
import Footer from '@/components/common/Footer';
import SeniorCard from '@/components/SeniorCard';
import { POSITION_LIST } from '@/constants/common';
import type { Position } from '@/types';

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
          {/* 배너 */}
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
                <SeniorCard />
              ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SeniorPage;

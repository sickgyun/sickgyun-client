'use client';

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';

const MobilePage = () => {
  return (
    <StyledMobilPageLayout>
      <StyledMobilPage>
        <StyledLogoImage src="/assets/svgs/logo.svg" alt="Logo" width={120} height={47} />
        <Stack direction="vertical" spacing={27}>
          <Stack direction="vertical" align="center" spacing={12}>
            <Text fontType="h3" color="gray900">
              모바일 접속 불가
            </Text>
            <Text fontType="p2" color="gray900">
              PC 환경에서 접속해주세요
            </Text>
          </Stack>
          <Text fontType="p2" color="gray600" style={{ textAlign: 'center' }}>
            식견은 PC 환경에서 Chrome 브라우저로 접속하시는 것을 권장드립니다.
          </Text>
        </Stack>
      </StyledMobilPage>
    </StyledMobilPageLayout>
  );
};

export default MobilePage;

const StyledMobilPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledMobilPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
`;

const StyledLogoImage = styled(Image)`
  margin-bottom: 24px;
`;

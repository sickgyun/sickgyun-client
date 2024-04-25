import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';

const ErrorReportBanner = () => {
  const handleGoErrorReportForm = () => {
    window.open('https://walla.my/sickgyun_report');
  };

  return (
    <StyledErrorReportBanner onClick={handleGoErrorReportForm}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h2" color="white">
          더 나은 식견을 위한
        </Text>
        <Text fontType="h1" color="white">
          에러/개선사항 제보하기
        </Text>
      </Stack>
      <Image src="/assets/svgs/symbol_white.svg" width={120} height={120} alt="Symbol" />
    </StyledErrorReportBanner>
  );
};

export default ErrorReportBanner;

const StyledErrorReportBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px;
  background-image: url('/assets/images/error_report_banner_background.png');
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

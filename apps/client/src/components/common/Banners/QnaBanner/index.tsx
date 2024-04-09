import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import Logo from '../../Logo';
import { isProd } from '@/utils/isProd';

const QnaBanner = () => {
  const router = useRouter();

  const handleGoQnaPage = () => {
    if (isProd(process.env.NODE_ENV)) {
      alert('상진이가 열심히 개발중이에요!');
      return;
    }
    router.push(`/qna`);
  };

  return (
    <StyledQnaBanner onClick={handleGoQnaPage}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h2" color="gray900">
          개발부터 커리어까지
        </Text>
        <Text fontType="h1" color="gray900">
          부산소마고에 관련한 모든 것, Q&A에서 물어보세요!
        </Text>
      </Stack>
      <Logo width={140} height={48} />
    </StyledQnaBanner>
  );
};

export default QnaBanner;

const StyledQnaBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px;
  background-image: url('/assets/images/qna_banner_background.png');
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 150px;
  border-radius: 16px;
  cursor: pointer;
`;

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';

const UserInterviewBanner = () => {
  const handleGoUserInterviewForm = () => {
    alert('4월 22일에 열려요!');
  };

  return (
    <StyledUserInterviewBanner onClick={handleGoUserInterviewForm}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h2" color="white">
          유저 인터뷰 참여하고
        </Text>
        <Text fontType="h1" color="white">
          3000원 받아가자!
        </Text>
      </Stack>
      <Image src="/assets/svgs/logo.svg" alt="Symbol" width={200} height={90} />
    </StyledUserInterviewBanner>
  );
};

export default UserInterviewBanner;

const StyledUserInterviewBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px;
  border-radius: 8px;
  background-image: url('/assets/images/user_interview_banner_background.png');
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

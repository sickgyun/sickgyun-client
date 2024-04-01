import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';

const CoffechatRequestCard = () => {
  return (
    <StyledCoffechatRequestCard direction="vertical" spacing={24}>
      <Stack direction="vertical" spacing={6}>
        <Text fontType="body1">2기 재학생 김석진님이 커피챗 신청을 보냈어요!</Text>
        <Text fontType="body2" color="gray600">
          커피챗 신청을 수락하시겠습니까?
        </Text>
      </Stack>
      <Stack direction="horizontal" align="center" spacing={12}>
        <Button styleType="secondary" size="medium" width="120px">
          거절하기
        </Button>
        <Button size="medium">수락하기</Button>
      </Stack>
    </StyledCoffechatRequestCard>
  );
};

export default CoffechatRequestCard;

const StyledCoffechatRequestCard = styled(Stack)`
  width: 100%;
  height: 150px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

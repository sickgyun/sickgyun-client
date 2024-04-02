import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatCancelConfirm from '../CoffeechatCancelConfirm';

const CoffeechatApplicationCard = () => {
  const overlay = useOverlay();

  const openCoffeechatCancelConfrim = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatCancelConfirm isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledCoffeechatApplicationCard
      direction="horizontal"
      justify="space-between"
      align="center"
    >
      <Stack direction="vertical" spacing={6}>
        <Text fontType="body1">김석진님</Text>
        <Text fontType="body2" color="gray600">
          응답 대기중인 커피챗이 있어요!
        </Text>
      </Stack>
      <Button
        onClick={openCoffeechatCancelConfrim}
        size="small"
        styleType="secondary"
        width="60px"
      >
        취소
      </Button>
    </StyledCoffeechatApplicationCard>
  );
};

export default CoffeechatApplicationCard;

const StyledCoffeechatApplicationCard = styled(Stack)`
  width: 100%;
  height: 80px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;
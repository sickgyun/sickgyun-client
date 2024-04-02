import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatCancelConfirm from '../CoffeechatCancelConfirm';
import type { User } from '@/types/user';

type CoffeechatSendCardProps = {
  toUser: User;
};

const CoffeechatSendCard = ({ toUser }: CoffeechatSendCardProps) => {
  const overlay = useOverlay();

  const openCoffeechatCancelConfrim = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatCancelConfirm isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledCoffeechatSendCard
      direction="horizontal"
      justify="space-between"
      align="center"
    >
      <Stack direction="vertical" spacing={6}>
        <Text fontType="body1">{toUser.name}님에게</Text>
        <Text fontType="body2" color="gray600">
          응답이 아직 오지 않았어요!
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
    </StyledCoffeechatSendCard>
  );
};

export default CoffeechatSendCard;

const StyledCoffeechatSendCard = styled(Stack)`
  width: 100%;
  height: 80px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

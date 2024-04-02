import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatAcceptConfirm from '../CoffeechatAcceptConfirm';
import CoffeechatRejectConfirm from '../CoffeechatRejectConfirm';
import type { User } from '@/types/user';

type CoffeechatReceiveCardProps = {
  fromUser: User;
};

const CoffeechatReceiveCard = ({ fromUser }: CoffeechatReceiveCardProps) => {
  const overlay = useOverlay();

  const openCoffeechatAcceptConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatAcceptConfirm isOpen={isOpen} onClose={close} />
    ));
  };

  const openCoffeechatRejectConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatRejectConfirm isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledCoffeechatReceiveCard direction="vertical" spacing={24}>
      <Stack direction="vertical" spacing={6}>
        <Text fontType="body1">
          {fromUser.cardinal}기 {fromUser.isGraduated ? '졸업생' : '재학생'}{' '}
          {fromUser.name}님이 커피챗 신청을 보냈어요!
        </Text>
        <Text fontType="body2" color="gray600">
          커피챗 신청을 수락하시겠습니까?
        </Text>
      </Stack>
      <Stack direction="horizontal" align="center" spacing={12}>
        <Button
          onClick={openCoffeechatRejectConfirm}
          styleType="secondary"
          size="medium"
          width="120px"
        >
          거절하기
        </Button>
        <Button onClick={openCoffeechatAcceptConfirm} size="medium">
          수락하기
        </Button>
      </Stack>
    </StyledCoffeechatReceiveCard>
  );
};

export default CoffeechatReceiveCard;

const StyledCoffeechatReceiveCard = styled(Stack)`
  width: 100%;
  height: 150px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

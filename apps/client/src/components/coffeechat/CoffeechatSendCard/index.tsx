import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatCancelConfirm from '../CoffeechatCancelConfirm';
import type { CoffeechatState } from '@/types/coffeechat';
import type { User } from '@/types/user';

type CoffeechatSendCardProps = {
  toUser: User;
  coffeechatId: number;
  state: CoffeechatState;
};

const CoffeechatSendCard = ({ toUser, coffeechatId, state }: CoffeechatSendCardProps) => {
  const overlay = useOverlay();

  const openCoffeechatCancelConfrim = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatCancelConfirm
        isOpen={isOpen}
        onClose={close}
        coffeechatId={coffeechatId}
      />
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
          {state === 'REJECT'
            ? '커피챗이 거절되었어요.'
            : state === 'ACCEPT'
              ? '커피챗이 수락되었어요.'
              : '응답이 아직 오지 않았어요!'}
        </Text>
      </Stack>
      {state === 'REJECT' ? (
        <StyledCoffeechatState state="REJECT">거절됨</StyledCoffeechatState>
      ) : state === 'ACCEPT' ? (
        <StyledCoffeechatState state="ACCEPT">수락됨</StyledCoffeechatState>
      ) : (
        <Button onClick={openCoffeechatCancelConfrim} size="small" styleType="secondary">
          취소
        </Button>
      )}
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

const StyledCoffeechatState = styled.div<{ state: CoffeechatState }>`
  ${({ theme, state }) => css`
    ${theme.fonts.body2}
    color: ${state === 'REJECT' ? theme.colors.red : theme.colors.primary};
  `}
`;

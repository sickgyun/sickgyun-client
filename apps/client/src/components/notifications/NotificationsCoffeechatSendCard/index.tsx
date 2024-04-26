import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import type { Dispatch, SetStateAction } from 'react';
import { CoffeechatStateEnum } from '@/types/coffeechat';
import type { Coffeechat, CoffeechatState } from '@/types/coffeechat';

type NotificationsCoffeechatSendCardProps = {
  sendCoffeechat: Coffeechat;
  isSelected: boolean;
  setSelectedCoffeechat: Dispatch<SetStateAction<Coffeechat>>;
};

const NotificationsCoffeechatSendCard = ({
  sendCoffeechat,
  isSelected,
  setSelectedCoffeechat,
}: NotificationsCoffeechatSendCardProps) => {
  const { state, toUser } = sendCoffeechat;
  const isNotPending = state !== 'PENDING';

  const handleNotificationsCoffeechatReceiveCardClick = () => {
    setSelectedCoffeechat(sendCoffeechat);
  };

  return (
    <StyledNotificationsCoffeechatSendCard
      onClick={handleNotificationsCoffeechatReceiveCardClick}
    >
      {isSelected && <StyledActiveBar />}
      <Stack direction="vertical" spacing={6}>
        <Text fontType="body1">{toUser.name} 님에게 커피챗을 요청했어요.</Text>
        <Stack direction="horizontal" spacing={12}>
          <Text fontType="body2" color="gray600">
            {toUser.cardinal}기 {toUser.isGraduated ? '졸업생' : '재학생'}
          </Text>
        </Stack>
      </Stack>
      {isNotPending && (
        <StyledCoffeechatState state={state}>
          {CoffeechatStateEnum[state]}됨
        </StyledCoffeechatState>
      )}
    </StyledNotificationsCoffeechatSendCard>
  );
};

export default NotificationsCoffeechatSendCard;

const StyledNotificationsCoffeechatSendCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 17px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-radius: 8px;
  }
`;

const StyledActiveBar = styled.div`
  position: absolute;
  left: 0;
  height: 48px;
  width: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledCoffeechatState = styled.div<{ state: CoffeechatState }>`
  ${({ theme, state }) => css`
    ${theme.fonts.body2}
    color: ${state === 'REJECT' ? theme.colors.red : theme.colors.primary};
  `}
`;

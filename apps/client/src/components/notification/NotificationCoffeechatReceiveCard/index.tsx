import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import type { Dispatch, SetStateAction } from 'react';
import { CoffeechatStateEnum } from '@/types/coffeechat';
import type { Coffeechat, CoffeechatState } from '@/types/coffeechat';

type NotificationCoffeechatReceiveCardProps = {
  receiveCoffeechat: Coffeechat;
  isSelected: boolean;
  setSelectedCoffeechat: Dispatch<SetStateAction<Coffeechat>>;
};

const NotificationCoffeechatReceiveCard = ({
  receiveCoffeechat,
  isSelected,
  setSelectedCoffeechat,
}: NotificationCoffeechatReceiveCardProps) => {
  const { fromUser, state } = receiveCoffeechat;
  const isNotPending = state !== 'PENDING';

  const handleNotificationCoffeechatReceiveCardClick = () => {
    setSelectedCoffeechat(receiveCoffeechat);
  };

  return (
    <StyledNotificationCoffeechatReceiveCard
      onClick={handleNotificationCoffeechatReceiveCardClick}
    >
      {isSelected && <StyledSelectedActiveBar />}
      <Stack direction="vertical" spacing={4}>
        <Text fontType="body1">{fromUser.name} 님으로부터 커피챗 요청이 왔어요.</Text>
        <Stack direction="horizontal" spacing={12}>
          <Text fontType="body2" color="gray600">
            {fromUser.cardinal}기 {fromUser.isGraduated ? '졸업생' : '재학생'}
          </Text>
        </Stack>
      </Stack>
      {isNotPending && (
        <StyledCoffeechatState state={state}>
          {CoffeechatStateEnum[state]} 완료
        </StyledCoffeechatState>
      )}
    </StyledNotificationCoffeechatReceiveCard>
  );
};

export default NotificationCoffeechatReceiveCard;

const StyledNotificationCoffeechatReceiveCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 17px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-radius: 8px;
  }
`;

const StyledSelectedActiveBar = styled.div`
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

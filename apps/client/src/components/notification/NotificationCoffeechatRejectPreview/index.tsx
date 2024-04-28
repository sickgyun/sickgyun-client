import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InfoBox, Text } from '@sickgyun/ui';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

type NotificationCoffeechatRejectPreviewProps = {
  coffeechatType: CoffeechatType;
  coffeechat?: Coffeechat;
};

const NotificationCoffeechatRejectPreview = ({
  coffeechatType,
  coffeechat,
}: NotificationCoffeechatRejectPreviewProps) => {
  const { fromUser, toUser, sendMessage, rejectMessage } = coffeechat ?? {};
  const isReceive = coffeechatType === 'RECEIVE';
  const userName = isReceive ? fromUser.name : toUser.name;

  return (
    <StyledNotificationCoffeechatRejectPreview>
      <Text fontType="h3">
        {userName} 님에게 {coffeechatType === 'RECEIVE' ? '받은' : '요청한'} 커피챗 요청
      </Text>
      {sendMessage && <StyledSendMessageBox>{sendMessage}</StyledSendMessageBox>}
      <StyledRejectStateBox>거절 완료</StyledRejectStateBox>
      {rejectMessage && (
        <StyledRejectMessageBox label="거절 사유">{rejectMessage}</StyledRejectMessageBox>
      )}
    </StyledNotificationCoffeechatRejectPreview>
  );
};

export default NotificationCoffeechatRejectPreview;

const StyledNotificationCoffeechatRejectPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledRejectStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  ${({ theme }) => css`
    ${theme.fonts.body1}
    color: ${theme.colors.red};
    background-color: ${theme.colors.redBackgound};
  `}
`;

const StyledSendMessageBox = styled(InfoBox)`
  margin-top: 24px;
`;

const StyledRejectMessageBox = styled(InfoBox)`
  margin-top: 48px;
`;

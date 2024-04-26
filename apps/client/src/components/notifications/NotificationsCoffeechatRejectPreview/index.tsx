import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InfoBox, Text } from '@sickgyun/ui';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

type NotificationsCoffeechatRejectPreviewProps = {
  coffeechatType: CoffeechatType;
  coffeechat?: Coffeechat;
};

const NotificationsCoffeechatRejectPreview = ({
  coffeechatType,
  coffeechat,
}: NotificationsCoffeechatRejectPreviewProps) => {
  const { fromUser, toUser, sendMessage, rejectMessage } = coffeechat;
  const isReceive = coffeechatType === 'RECEIVE';
  const userName = isReceive ? fromUser.name : toUser.name;

  return (
    <StyledNotificationsCoffeechatRejectPreview>
      <Text fontType="h2">
        {userName} 님에게 {coffeechatType === 'RECEIVE' ? '받은' : '요청한'} 커피챗 요청
      </Text>
      {sendMessage && <StyledSendMessageBox>{sendMessage}</StyledSendMessageBox>}
      <StyledRejectStateBox>거절 완료</StyledRejectStateBox>
      {rejectMessage && (
        <StyledRejectMessageBox label="거절 사유">{rejectMessage}</StyledRejectMessageBox>
      )}
    </StyledNotificationsCoffeechatRejectPreview>
  );
};

export default NotificationsCoffeechatRejectPreview;

const StyledNotificationsCoffeechatRejectPreview = styled.div`
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
  background: rgba(244, 67, 54, 0.05);
  ${({ theme }) => css`
    ${theme.fonts.body1}
    color: ${theme.colors.red};
  `}
`;

const StyledSendMessageBox = styled(InfoBox)`
  margin-top: 24px;
`;

const StyledRejectMessageBox = styled(InfoBox)`
  margin-top: 48px;
`;

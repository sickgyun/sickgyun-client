import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InfoBox, Stack, Text } from '@sickgyun/ui';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';
import { convertNewlineToJSX } from '@/utils/convertNewlineToJsx';

type NotificationCoffeechatAcceptPreviewProps = {
  coffeechatType: CoffeechatType;
  coffeechat?: Coffeechat;
};

const NotificationCoffeechatAcceptPreview = ({
  coffeechatType,
  coffeechat,
}: NotificationCoffeechatAcceptPreviewProps) => {
  const { fromUser, toUser, contact, sendMessage } = coffeechat ?? {};
  const isReceive = coffeechatType === 'RECEIVE';
  const userName = isReceive ? fromUser.name : toUser.name;

  return (
    <StyledNotificationCoffeechatAcceptPreview>
      <Text fontType="h3">
        {userName} 님에게 {isReceive ? '받은' : '요청한'} 커피챗 요청
      </Text>
      {sendMessage && <StyledSendMessageBox>{sendMessage}</StyledSendMessageBox>}
      <StyledAcceptStateBox>수락 완료</StyledAcceptStateBox>
      <StyledContactContainer>
        <Stack direction="vertical" spacing={8}>
          <Text fontType="h5">{userName} 님의 연락처</Text>
          <Text fontType="body2" color="gray600">
            {convertNewlineToJSX(
              `커피챗을 수락했으니 이제 약속을 잡을 차례에요!\n${userName} 님에게 먼저 연락을 보내보는 건 어떠세요?`
            )}
          </Text>
        </Stack>
        <Stack
          direction="vertical"
          spacing={20}
          style={{ marginTop: '24px', width: '100%' }}
        >
          <Stack direction="horizontal" spacing={16}>
            {contact?.phoneNumber && (
              <InfoBox label="전화번호">{contact.phoneNumber}</InfoBox>
            )}
            {contact?.kakaoId && (
              <InfoBox label="카카오톡 아이디">{contact.kakaoId}</InfoBox>
            )}
          </Stack>
          {contact?.instagramId && (
            <InfoBox label="인스타그램 아이디">{contact.instagramId}</InfoBox>
          )}
        </Stack>
      </StyledContactContainer>
    </StyledNotificationCoffeechatAcceptPreview>
  );
};

export default NotificationCoffeechatAcceptPreview;

const StyledNotificationCoffeechatAcceptPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledSendMessageBox = styled(InfoBox)`
  margin-top: 24px;
`;

const StyledAcceptStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  ${({ theme }) => css`
    ${theme.fonts.body1}
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primaryBackground};
  `}
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 48px;
`;

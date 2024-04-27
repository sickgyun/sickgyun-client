import styled from '@emotion/styled';
import { Button, InfoBox, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatAcceptConfirm from '@/components/coffeechat/CoffeechatAcceptConfirm';
import CoffeechatContactFormModal from '@/components/coffeechat/CoffeechatContactFormModal';
import CoffeechatRejectConfirm from '@/components/coffeechat/CoffeechatRejectConfirm';
import { useUser } from '@/hooks/common/useUser';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

type NotificationCoffeechatPendingPreviewProps = {
  coffeechatType: CoffeechatType;
  coffeechat?: Coffeechat;
};

const NotificationCoffeechatPendingPreview = ({
  coffeechatType,
  coffeechat,
}: NotificationCoffeechatPendingPreviewProps) => {
  const overlay = useOverlay();
  const { user } = useUser();
  const { id, sendMessage, fromUser, toUser } = coffeechat ?? {};
  const isReceive = coffeechatType === 'RECEIVE';
  const userName = isReceive ? fromUser.name : toUser.name;

  const openCoffeechatAcceptConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatAcceptConfirm coffeechatId={id} isOpen={isOpen} onClose={close} />
    ));
  };

  const openCoffeechatContactFormModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactFormModal isOpen={isOpen} onClose={close} />
    ));
  };

  const openCoffeechatRejectConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatRejectConfirm coffeechatId={id} isOpen={isOpen} onClose={close} />
    ));
  };

  const handleAcceptButtonClick = () => {
    if (user.hasNotContact) {
      openCoffeechatContactFormModal();
    } else {
      openCoffeechatAcceptConfirm();
    }
  };

  return (
    <StyledNotificationCoffeechatPendingPreview>
      <Text fontType="h2">
        {userName} 님에게 {isReceive ? '받은' : '요청한'} 커피챗 요청
      </Text>
      {sendMessage && <StyledSendMessageBox>{sendMessage}</StyledSendMessageBox>}
      {isReceive ? (
        <Stack
          direction="horizontal"
          align="center"
          spacing={8}
          style={{ width: '100%', marginTop: '12px' }}
        >
          <StyledAcceptButton onClick={handleAcceptButtonClick}>
            수락하기
          </StyledAcceptButton>
          <StyledRejectButton onClick={openCoffeechatRejectConfirm} styleType="secondary">
            거절하기
          </StyledRejectButton>
        </Stack>
      ) : (
        <Text fontType="p1" color="gray600" style={{ marginTop: '16px' }}>
          {userName} 님의 답변을 기다리는 중...
        </Text>
      )}
    </StyledNotificationCoffeechatPendingPreview>
  );
};

export default NotificationCoffeechatPendingPreview;

const StyledNotificationCoffeechatPendingPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledSendMessageBox = styled(InfoBox)`
  margin-top: 24px;
`;

const StyledAcceptButton = styled(Button)`
  flex: 6;
`;

const StyledRejectButton = styled(Button)`
  flex: 1;
`;

import styled from '@emotion/styled';
import NotificationCoffeechatAcceptPreview from '../NotificationCoffeechatAcceptPreview';
import NotificationCoffeechatPendingPreview from '../NotificationCoffeechatPendingPreview';
import NotificationCoffeechatRejectPreview from '../NotificationCoffeechatRejectPreview';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

type NotificationCoffeechatPreviewProps = {
  coffeechat?: Coffeechat;
  coffeechatType: CoffeechatType;
};

const NotificationCoffeechatPreview = ({
  coffeechat,
  coffeechatType,
}: NotificationCoffeechatPreviewProps) => {
  const { state } = coffeechat ?? {};
  const isPending = state === 'PENDING';
  const isAccept = state === 'ACCEPT';
  const isReject = state === 'REJECT';

  return (
    <StyledNotificationCoffeechatPreview>
      {isPending ? (
        <NotificationCoffeechatPendingPreview
          coffeechatType={coffeechatType}
          coffeechat={coffeechat}
        />
      ) : isAccept ? (
        <NotificationCoffeechatAcceptPreview
          coffeechatType={coffeechatType}
          coffeechat={coffeechat}
        />
      ) : (
        isReject && (
          <NotificationCoffeechatRejectPreview
            coffeechatType={coffeechatType}
            coffeechat={coffeechat}
          />
        )
      )}
    </StyledNotificationCoffeechatPreview>
  );
};

export default NotificationCoffeechatPreview;

const StyledNotificationCoffeechatPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
`;

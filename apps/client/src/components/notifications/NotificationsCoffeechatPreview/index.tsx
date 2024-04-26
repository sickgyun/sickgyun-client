import styled from '@emotion/styled';
import NotificationsCoffeechatAcceptPreview from '../NotificationsCoffeechatAcceptPreview';
import NotificationsCoffeechatPendingPreview from '../NotificationsCoffeechatPendingPreview';
import NotificationsCoffeechatRejectPreview from '../NotificationsCoffeechatRejectPreview';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

type NotificationsCoffeechatPreviewProps = {
  coffeechat?: Coffeechat;
  coffeechatType: CoffeechatType;
};

const NotificationsCoffeechatPreview = ({
  coffeechat,
  coffeechatType,
}: NotificationsCoffeechatPreviewProps) => {
  const { state } = coffeechat ?? {};
  const isPending = state === 'PENDING';
  const isAccept = state === 'ACCEPT';
  const isReject = state === 'REJECT';

  return (
    <StyledNotificationsCoffeechatPreview>
      {isPending ? (
        <NotificationsCoffeechatPendingPreview
          coffeechatType={coffeechatType}
          coffeechat={coffeechat}
        />
      ) : isAccept ? (
        <NotificationsCoffeechatAcceptPreview
          coffeechatType={coffeechatType}
          coffeechat={coffeechat}
        />
      ) : (
        isReject && (
          <NotificationsCoffeechatRejectPreview
            coffeechatType={coffeechatType}
            coffeechat={coffeechat}
          />
        )
      )}
    </StyledNotificationsCoffeechatPreview>
  );
};

export default NotificationsCoffeechatPreview;

const StyledNotificationsCoffeechatPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

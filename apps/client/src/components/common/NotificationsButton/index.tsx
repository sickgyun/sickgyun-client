import styled from '@emotion/styled';
import { IconNotificationFill } from '@seed-design/icon';
import { Tooltip } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';

type NotificationsButtonProps = {
  hasNotification: boolean;
};

const NotificationsButton = ({ hasNotification }: NotificationsButtonProps) => {
  const router = useRouter();

  const handleGoNotificationPage = () => {
    router.push('/notifications');
  };

  return hasNotification ? (
    <Tooltip
      content="확인하지 않은 커피챗 요청이 있어요!"
      visible={true}
      placement="bottom-end"
    >
      {({ ref }) => {
        return (
          <>
            <StyledNotificationsButton ref={ref} onClick={handleGoNotificationPage} />
            <StyledNotificationsDot />
          </>
        );
      }}
    </Tooltip>
  ) : (
    <StyledEmptyNotificationsButton onClick={handleGoNotificationPage} />
  );
};

export default NotificationsButton;

const StyledNotificationsButton = styled(IconNotificationFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const StyledNotificationsDot = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red};
  width: 4px;
  height: 4px;
  top: 0;
  right: 0;
  border-radius: 50%;
`;

const StyledEmptyNotificationsButton = styled(IconNotificationFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
`;

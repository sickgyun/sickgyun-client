import styled from '@emotion/styled';
import { IconNotificationFill } from '@seed-design/icon';
import { Tooltip } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';

type NotificationButtonProps = {
  hasNotification: boolean;
};

const NotificationButton = ({ hasNotification }: NotificationButtonProps) => {
  const router = useRouter();

  const handleGoNotificationPage = () => {
    router.push('/notification');
  };

  return hasNotification ? (
    <Tooltip content="알림을 확인해보세요!" visible={true} placement="bottom-end">
      {({ ref }) => {
        return (
          <>
            <StyledNotificationButton ref={ref} onClick={handleGoNotificationPage} />
            <StyledNotificationDot />
          </>
        );
      }}
    </Tooltip>
  ) : (
    <StyledEmptyNotificationButton onClick={handleGoNotificationPage} />
  );
};

export default NotificationButton;

const StyledNotificationButton = styled(IconNotificationFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const StyledNotificationDot = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red};
  width: 4px;
  height: 4px;
  top: 0;
  right: 0;
  border-radius: 50%;
`;

const StyledEmptyNotificationButton = styled(IconNotificationFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
`;

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
    <Tooltip
      content="확인하지 않은 커피챗 요청이 있어요!"
      visible={true}
      placement="bottom-end"
    >
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
    <StyledNotificationButton onClick={handleGoNotificationPage} />
  );
};

export default NotificationButton;

const StyledNotificationButton = styled(IconNotificationFill)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray900};
  cursor: pointer;
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

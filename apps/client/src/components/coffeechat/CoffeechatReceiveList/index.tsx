import styled from '@emotion/styled';
import { Button, Spinner, Stack, Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';
import CoffeechatReceiveCard from '../CoffeechatReceiveCard';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { useUser } from '@/hooks/common/useUser';
import { useLogAnalyticsEvent } from '@/libs/logging';

const CoffeechatReceiveList = () => {
  const router = useRouter();
  const { receiveCoffeechatList, isLoading } = useGetReceiveCoffeechatList();
  const { logClickEvent } = useLogAnalyticsEvent();
  const { user } = useUser();

  const handleGoProfileCreatePage = () => {
    logClickEvent({ name: 'click_notification_profile_create_page' });
    router.push('/profile/create');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledCoffeechatReceiveList>
      {!isEmpty(receiveCoffeechatList) ? (
        receiveCoffeechatList.map((coffeechat) => (
          <CoffeechatReceiveCard
            key={coffeechat.id}
            coffeechatId={coffeechat.id}
            fromUser={coffeechat.fromUser}
            state={coffeechat.state}
            message={coffeechat.message}
            contact={coffeechat.contact}
          />
        ))
      ) : user.hasCreatedProfile ? (
        <Text fontType="h3" style={{ textAlign: 'center' }}>
          앗! 요청 받은 내역이 없어요...
        </Text>
      ) : (
        <Stack direction="vertical" align="center" justify="center" spacing={16}>
          <Button onClick={handleGoProfileCreatePage} size="medium" width="200px">
            프로필 등록하러 가기
          </Button>
          <Text fontType="p1">프로필 등록을 하면 커피챗 요청을 받을 수 있어요!</Text>
        </Stack>
      )}
    </StyledCoffeechatReceiveList>
  );
};

export default CoffeechatReceiveList;

const StyledCoffeechatReceiveList = styled.div`
  display: flex;
  flex-direction: column;
`;

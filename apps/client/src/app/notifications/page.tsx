'use client';

import styled from '@emotion/styled';
import { Flex, Spacer, Spinner, Stack, Switch, Text } from '@sickgyun/ui';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import NotificationsCoffeechatPreview from '@/components/notifications/NotificationsCoffeechatPreview';
import NotificationsCoffeechatReceiveCard from '@/components/notifications/NotificationsCoffeechatReceiveCard';
import NotificationsCoffeechatSendCard from '@/components/notifications/NotificationsCoffeechatSendCard';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { useGetSendCoffeechatList } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

const NotificationsPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [selectedCoffeechat, setSelectedCoffeechat] = useState<Coffeechat>();
  const selectedCoffeechatType = params.get('coffeechatType') as CoffeechatType;
  const { receiveCoffeechatList, isLoading: isReceiveCoffeechatListLoading } =
    useGetReceiveCoffeechatList();
  const { sendCoffeechatList, isLoading: isSendCoffeechatListLoading } =
    useGetSendCoffeechatList();
  const isLoading = isReceiveCoffeechatListLoading || isSendCoffeechatListLoading;

  const handleNotificationsCoffeechatTypeSwitchChange = (value: any) => {
    router.push(`/notifications?coffeechatType=${value}`);
  };

  useLayoutEffect(() => {
    if (isNil(selectedCoffeechatType)) {
      router.replace('/notifications?coffeechatType=RECEIVE');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCoffeechatType]);

  useEffect(() => {
    if (selectedCoffeechatType === 'RECEIVE') {
      setSelectedCoffeechat(receiveCoffeechatList?.[0]);
    } else {
      setSelectedCoffeechat(sendCoffeechatList?.[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveCoffeechatList, sendCoffeechatList, selectedCoffeechatType]);

  return (
    <>
      <Header />
      <StyledNotificationsPageLayout>
        <StyledNotificationsPage>
          <Stack direction="vertical" align="flex-start" spacing={28}>
            <Text fontType="h1">커피챗 요청 내역</Text>
            <Switch
              options={[
                { name: '받은 요청', value: 'RECEIVE' },
                { name: '보낸 요청', value: 'SEND' },
              ]}
              value={selectedCoffeechatType}
              onChange={handleNotificationsCoffeechatTypeSwitchChange}
            />
          </Stack>
          <Spacer height={36} />
          {isLoading ? (
            <Spinner />
          ) : (
            <Flex align="flex-start" justify="space-between">
              <StyledNotificationsList>
                {selectedCoffeechatType === 'RECEIVE'
                  ? receiveCoffeechatList?.map((receiveCoffeechat) => (
                      <NotificationsCoffeechatReceiveCard
                        receiveCoffeechat={receiveCoffeechat}
                        setSelectedCoffeechat={setSelectedCoffeechat}
                        isSelected={receiveCoffeechat.id === selectedCoffeechat?.id}
                      />
                    ))
                  : sendCoffeechatList?.map((sendCoffeechat) => (
                      <NotificationsCoffeechatSendCard
                        sendCoffeechat={sendCoffeechat}
                        setSelectedCoffeechat={setSelectedCoffeechat}
                        isSelected={sendCoffeechat.id === selectedCoffeechat?.id}
                      />
                    ))}
              </StyledNotificationsList>
              <NotificationsCoffeechatPreview
                coffeechatType={selectedCoffeechatType}
                coffeechat={selectedCoffeechat}
              />
            </Flex>
          )}
        </StyledNotificationsPage>
      </StyledNotificationsPageLayout>
      <Footer />
    </>
  );
};

export default NotificationsPage;

const StyledNotificationsPageLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledNotificationsPage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 32px;
`;

const StyledNotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  width: 540px;
  max-height: 600px;
`;

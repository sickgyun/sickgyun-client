'use client';

import styled from '@emotion/styled';
import { Spacer, Spinner, Stack, Switch, Text } from '@sickgyun/ui';
import { isEmpty, isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import NotificationCoffeechatPreview from '@/components/notification/NotificationCoffeechatPreview';
import NotificationCoffeechatReceiveCard from '@/components/notification/NotificationCoffeechatReceiveCard';
import NotificationCoffeechatSendCard from '@/components/notification/NotificationCoffeechatSendCard';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { useGetSendCoffeechatList } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';
import type { Coffeechat, CoffeechatType } from '@/types/coffeechat';

const NotificationPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [selectedCoffeechat, setSelectedCoffeechat] = useState<Coffeechat>();
  const coffeechatType = params.get('coffeechatType') as CoffeechatType;
  const { receiveCoffeechatList, isLoading: isReceiveCoffeechatListLoading } =
    useGetReceiveCoffeechatList();
  const { sendCoffeechatList, isLoading: isSendCoffeechatListLoading } =
    useGetSendCoffeechatList();
  const isLoading = isReceiveCoffeechatListLoading || isSendCoffeechatListLoading;

  const handleNotificationCoffeechatTypeSwitchChange = (value: any) => {
    router.push(`/notification?coffeechatType=${value}`);
  };

  useLayoutEffect(() => {
    if (isNil(coffeechatType)) {
      router.replace('/notification?coffeechatType=RECEIVE');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeechatType]);

  useEffect(() => {
    if (coffeechatType === 'RECEIVE') {
      setSelectedCoffeechat(receiveCoffeechatList?.[0]);
    } else {
      setSelectedCoffeechat(sendCoffeechatList?.[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveCoffeechatList, sendCoffeechatList, coffeechatType]);

  return (
    <>
      <Header />
      <StyledNotificationPageLayout>
        <StyledNotificationPage>
          <Text fontType="h1">커피챗 요청 내역</Text>
          <Spacer height={28} />
          <Switch
            options={[
              { name: '받은 요청', value: 'RECEIVE' },
              { name: '보낸 요청', value: 'SEND' },
            ]}
            value={coffeechatType}
            onChange={handleNotificationCoffeechatTypeSwitchChange}
          />
          <Spacer height={36} />
          {isLoading ? (
            <Spinner />
          ) : (
            <Stack direction="horizontal" spacing={64} style={{ width: '100%' }}>
              <StyledNotificationList>
                {coffeechatType === 'RECEIVE' ? (
                  !isEmpty(receiveCoffeechatList) ? (
                    receiveCoffeechatList.map((receiveCoffeechat) => (
                      <NotificationCoffeechatReceiveCard
                        receiveCoffeechat={receiveCoffeechat}
                        setSelectedCoffeechat={setSelectedCoffeechat}
                        isSelected={receiveCoffeechat.id === selectedCoffeechat?.id}
                      />
                    ))
                  ) : (
                    <Text fontType="h4">앗! 아직 받은 커피챗 요청이 없어요...</Text>
                  )
                ) : !isEmpty(sendCoffeechatList) ? (
                  sendCoffeechatList.map((sendCoffeechat) => (
                    <NotificationCoffeechatSendCard
                      sendCoffeechat={sendCoffeechat}
                      setSelectedCoffeechat={setSelectedCoffeechat}
                      isSelected={sendCoffeechat.id === selectedCoffeechat?.id}
                    />
                  ))
                ) : (
                  <Text fontType="h4">앗! 아직 요청한 커피챗이 없어요...</Text>
                )}
              </StyledNotificationList>
              {selectedCoffeechat && (
                <NotificationCoffeechatPreview
                  coffeechatType={coffeechatType}
                  coffeechat={selectedCoffeechat}
                />
              )}
            </Stack>
          )}
        </StyledNotificationPage>
      </StyledNotificationPageLayout>
      <Footer />
    </>
  );
};

export default NotificationPage;

const StyledNotificationPageLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledNotificationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  padding-top: 32px;
  margin-bottom: 48px;
`;

const StyledNotificationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  width: 100%;
  max-height: 600px;
`;

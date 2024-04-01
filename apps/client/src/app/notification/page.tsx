'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import CoffeechatList from '@/components/coffeechat/CoffeechatList';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import type { CoffeechatNotificationType } from '@/types/coffeechat';

const NotificationPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const coffeechatNotificationType = params.get(
    'coffeechatNotificationType'
  ) as CoffeechatNotificationType;

  useLayoutEffect(() => {
    if (isNil(coffeechatNotificationType)) {
      router.replace('/notification?coffeechatNotificationType=REQUEST');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCoffeechatNotificationTypeSelected = (
    coffeechatNotificationType: CoffeechatNotificationType
  ) => {
    router.replace(
      `/notification?coffeechatNotificationType=${coffeechatNotificationType}`
    );
  };

  return (
    <>
      <Header />
      <StyledNotificationPageLayout>
        <StyledNotificationPage>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            커피챗 {coffeechatNotificationType === 'REQUEST' ? '요청' : '신청'} 알림
          </Text>
          <Spacer height={32} />
          <Stack direction="horizontal" align="center" spacing={12}>
            <Button
              onClick={() => handleCoffeechatNotificationTypeSelected('REQUEST')}
              isActive={coffeechatNotificationType === 'REQUEST'}
              styleType="quaternary"
            >
              요청 내역
            </Button>
            <Button
              onClick={() => handleCoffeechatNotificationTypeSelected('APPLICATION')}
              isActive={coffeechatNotificationType === 'APPLICATION'}
              styleType="quaternary"
            >
              신청 내역
            </Button>
          </Stack>
          <Spacer height={48} />
          <StyledCoffeechatListWrapper>
            <CoffeechatList coffeechatNotificationType={coffeechatNotificationType} />
          </StyledCoffeechatListWrapper>
          <Spacer height={64} />
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
  width: 700px;
  margin: 0 auto;
`;

const StyledCoffeechatListWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

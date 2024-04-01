'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import CoffechatList from '@/components/coffechat/CoffechatList';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import type { CoffechatNotificationType } from '@/types/coffechat';

const NotificationPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const coffechatNotificationType = params.get(
    'coffechatNotificationType'
  ) as CoffechatNotificationType;

  useLayoutEffect(() => {
    if (isNil(coffechatNotificationType)) {
      router.replace('/notification?coffechatNotificationType=REQUEST');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCoffechatNotificationTypeSelected = (
    coffechatNotificationType: CoffechatNotificationType
  ) => {
    router.replace(
      `/notification?coffechatNotificationType=${coffechatNotificationType}`
    );
  };

  return (
    <>
      <Header />
      <StyledNotificationPageLayout>
        <StyledNotificationPage>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            커피챗 {coffechatNotificationType === 'REQUEST' ? '요청' : '신청'} 알림
          </Text>
          <Spacer height={32} />
          <Stack direction="horizontal" align="center" spacing={12}>
            <Button
              onClick={() => handleCoffechatNotificationTypeSelected('REQUEST')}
              isActive={coffechatNotificationType === 'REQUEST'}
              styleType="quaternary"
            >
              요청 내역
            </Button>
            <Button
              onClick={() => handleCoffechatNotificationTypeSelected('APPLICATION')}
              isActive={coffechatNotificationType === 'APPLICATION'}
              styleType="quaternary"
            >
              신청 내역
            </Button>
          </Stack>
          <Spacer height={48} />
          <StyledCoffechatListWrapper>
            <CoffechatList coffechatNotificationType={coffechatNotificationType} />
          </StyledCoffechatListWrapper>
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

const StyledCoffechatListWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

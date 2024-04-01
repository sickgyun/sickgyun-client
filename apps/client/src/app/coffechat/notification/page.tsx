'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import CoffechatList from '@/components/coffechat/CoffechatList';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

type CoffechatNotificationType = 'REQUEST' | 'APPLICATION';

const CoffechatNotificationPage = () => {
  const [coffechatNotificationType, setCoffechatNotificationType] =
    useState<CoffechatNotificationType>('REQUEST');

  const handleCoffechatNotificationTypeSelected = (
    coffechatNotificationType: CoffechatNotificationType
  ) => {
    setCoffechatNotificationType(coffechatNotificationType);
  };

  return (
    <>
      <Header />
      <StyledCoffechatNotificationPageLayout>
        <StyledConffechatPage>
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
            <CoffechatList />
          </StyledCoffechatListWrapper>
          <Spacer height={64} />
        </StyledConffechatPage>
      </StyledCoffechatNotificationPageLayout>
      <Footer />
    </>
  );
};

export default CoffechatNotificationPage;

const StyledCoffechatNotificationPageLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledConffechatPage = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const StyledCoffechatListWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

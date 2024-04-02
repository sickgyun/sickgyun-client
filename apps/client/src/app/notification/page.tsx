'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import CoffeechatList from '@/components/coffeechat/CoffeechatList';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import type { CoffeechatType } from '@/types/coffeechat';

const NotificationPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const selectedCoffeechatType = params.get('type') as CoffeechatType;
  const coffeechatType = selectedCoffeechatType === 'RECEIVE' ? '요청' : '신청';

  useLayoutEffect(() => {
    if (isNil(selectedCoffeechatType)) {
      router.replace('/notification?type=RECEIVE');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCoffeechatType]);

  const handleCoffeechatTypeSelected = (coffeechatType: CoffeechatType) => {
    router.replace(`/notification?type=${coffeechatType}`);
  };

  return (
    <>
      <Header />
      <StyledNotificationPageLayout>
        <StyledNotificationPage>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            커피챗 {coffeechatType} 알림
          </Text>
          <Spacer height={32} />
          <Stack direction="horizontal" align="center" spacing={12}>
            <Button
              onClick={() => handleCoffeechatTypeSelected('RECEIVE')}
              isActive={selectedCoffeechatType === 'RECEIVE'}
              styleType="quaternary"
            >
              요청 내역
            </Button>
            <Button
              onClick={() => handleCoffeechatTypeSelected('SEND')}
              isActive={selectedCoffeechatType === 'SEND'}
              styleType="quaternary"
            >
              신청 내역
            </Button>
          </Stack>
          <Spacer height={48} />
          <StyledCoffeechatListWrapper>
            <CoffeechatList coffeechatType={selectedCoffeechatType} />
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

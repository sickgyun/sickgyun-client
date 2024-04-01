'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import CoffechatList from '@/components/coffechat/CoffechatList';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

type CoffechatType = 'REQUEST' | 'APPLICATION';

const CoffechatPage = () => {
  const [coffechatType, setCoffechatType] = useState<CoffechatType>('REQUEST');

  const handleCoffechatTypeSelected = (coffechatType: CoffechatType) => {
    setCoffechatType(coffechatType);
  };

  return (
    <>
      <Header />
      <StyledCoffechatPageLayout>
        <StyledConffechatPage>
          <Spacer height={32} />
          <Text fontType="h1" color="gray900">
            커피챗 {coffechatType === 'REQUEST' ? '요청' : '신청'} 알림
          </Text>
          <Spacer height={32} />
          <Stack direction="horizontal" align="center" spacing={12}>
            <Button
              onClick={() => handleCoffechatTypeSelected('REQUEST')}
              isActive={coffechatType === 'REQUEST'}
              styleType="quaternary"
            >
              요청 내역
            </Button>
            <Button
              onClick={() => handleCoffechatTypeSelected('APPLICATION')}
              isActive={coffechatType === 'APPLICATION'}
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
      </StyledCoffechatPageLayout>
      <Footer />
    </>
  );
};

export default CoffechatPage;

const StyledCoffechatPageLayout = styled.div`
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

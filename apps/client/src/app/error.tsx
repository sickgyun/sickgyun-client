'use client';

import styled from '@emotion/styled';
import { Button, Flex, Spacer, Text } from '@sickgyun/ui';
import Image from 'next/image';

const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <StyledErrorPage>
      <Flex direction="column" align="center">
        <Image src="/assets/svgs/error.svg" width={260} height={97} alt="Error" />
        <Spacer height={56} />
        <Flex direction="column" align="center">
          <Text fontType="h1" color="gray900">
            페이지가 작동하지 않아요
          </Text>
          <Spacer height={20} />
          <Text fontType="p1" color="gray900" style={{ textAlign: 'center' }}>
            일시적인 문제로 페이지에 접근할 수 없어요.
            <br />
            식견 팀이 열심히 해결하고 있으니 나중에 다시 시도해주세요.
          </Text>
        </Flex>
        <Spacer height={48} />
        <StyledReloadButton onClick={handleReload} size="large">
          새로고침하기
        </StyledReloadButton>
      </Flex>
    </StyledErrorPage>
  );
};

export default ErrorPage;

const StyledErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StyledReloadButton = styled(Button)`
  width: 135px;
`;

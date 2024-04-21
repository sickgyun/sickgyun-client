'use client';

import styled from '@emotion/styled';
import { Button, Flex, Spacer, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBackPage = () => {
    router.back();
  };

  return (
    <StyledNotFoundPage>
      <Flex direction="column" align="center">
        <Image src="/assets/svgs/not_found.svg" width={260} height={97} alt="Error" />
        <Spacer height={56} />
        <Flex direction="column" align="center">
          <Text fontType="h1" color="gray900">
            페이지를 찾을 수 없어요
          </Text>
          <Spacer height={20} />
          <Text fontType="p1" color="gray900" style={{ textAlign: 'center' }}>
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
            <br />
            걱정 마세요, 최고의 탐험가도 때로는 길을 잃을 때가 있죠.
          </Text>
        </Flex>
        <Spacer height={48} />
        <StyledBackButton onClick={handleGoBackPage} size="large">
          이전 페이지로 돌아가기
        </StyledBackButton>
      </Flex>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;

const StyledNotFoundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StyledBackButton = styled(Button)`
  width: 200px;
`;

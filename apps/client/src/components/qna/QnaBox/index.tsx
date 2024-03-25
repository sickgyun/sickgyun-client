import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { Button, Flex, Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { QNA_CATEGORY } from '@/constants/qna';

const QnaBox = () => {
  const router = useRouter();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleGoQnaWritePage = () => {
    router.push('/qna/write');
  };

  return (
    <StyledQnaBox>
      <Stack
        direction="horizontal"
        align="center"
        justify="center"
        style={{ height: '90px', borderBottom: `1px solid ${colors.white}` }}
      >
        <Button width="80%" styleType="primary" onClick={() => handleGoQnaWritePage()}>
          질문하기
        </Button>
      </Stack>
      <Flex direction="column">
        {QNA_CATEGORY.map((category) => (
          <StyledQnaCategory
            onClick={() => setActiveCategoryIndex(category.id)}
            isActive={category.id === activeCategoryIndex}
          >
            <Stack direction="horizontal" spacing={10}>
              <Text>{category.emoji}</Text>
              <Text fontType="body1">{category.title}</Text>
            </Stack>
          </StyledQnaCategory>
        ))}
      </Flex>
    </StyledQnaBox>
  );
};

export default QnaBox;

const StyledQnaBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

const StyledQnaCategory = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10%;
  position: relative;
  gap: 5px;
  cursor: pointer;

  ::before {
    content: '';
    display: block;
    height: 25px;
    width: 3px;
    position: absolute;
    left: 0px;
    border-left: 3px solid
      ${({ theme, isActive }) => (isActive ? theme.colors.primary : 'transparent')};
  }
`;

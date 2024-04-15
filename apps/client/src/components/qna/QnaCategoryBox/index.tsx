import styled from '@emotion/styled';
import { Button, Flex, Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { QNA_CATEGORY } from '@/constants/qna';

const QnaCategoryBox = () => {
  const router = useRouter();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleGoQnaWritePage = () => {
    router.push('/qna/write');
  };

  const handleGoCategoryQnaPage = (id: number, qnaType: string) => {
    setActiveCategoryIndex(id);
    router.push(`/qna?category=${qnaType}`);
  };

  return (
    <StyledQnaCategoryBox>
      <QnaButtonLayout>
        <Button width="80%" onClick={() => handleGoQnaWritePage()}>
          질문하기
        </Button>
      </QnaButtonLayout>
      <Flex direction="column">
        {QNA_CATEGORY.map((category) => (
          <StyledQnaCategory
            key={category.id}
            onClick={() => handleGoCategoryQnaPage(category.id, category.qnaType)}
            isActive={category.id === activeCategoryIndex}
          >
            <Stack direction="horizontal" spacing={10}>
              <Text>{category.emoji}</Text>
              <Text fontType="body1">{category.qnaTitle}</Text>
            </Stack>
          </StyledQnaCategory>
        ))}
      </Flex>
    </StyledQnaCategoryBox>
  );
};

export default QnaCategoryBox;

const StyledQnaCategoryBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

const QnaButtonLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
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

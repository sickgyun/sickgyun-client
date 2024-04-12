'use client';

import styled from '@emotion/styled';
import { IconChevronLeftFill, IconChevronRightFill } from '@seed-design/icon';
import { Flex, Spacer, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import Header from '@/components/common/Header';
import QnaCard from '@/components/qna/QnaCard';
import QnaCategoryBox from '@/components/qna/QnaCategoryBox';
import QnaList from '@/components/qna/QnaList';
import { withAuth } from '@/hocs/withAuth';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';

const QnaPage = () => {
  const { qnaList } = useGetQnaList();
  const topRankQnaList = qnaList.slice(0, 9);

  const [currentQnaPageIndex, setCurrentQnaPageIndex] = useState(0);

  const handlePrevPopularQna = () => {
    if (currentQnaPageIndex > 0) {
      setCurrentQnaPageIndex((prev) => prev - 1);
    }
  };

  const handleNextPopularQna = () => {
    if (currentQnaPageIndex < qnaList.length - 3) {
      setCurrentQnaPageIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header />
      <StyledQnaLayout>
        <StyledQnaContainer>
          <Stack direction="vertical" spacing={15}>
            <Flex justify="space-between">
              <Text fontType="h3">인기글을 모아봤어요!</Text>
              <Stack direction="horizontal" spacing={6}>
                <StyledActiveButton
                  onClick={handlePrevPopularQna}
                  isButtonFirstPage={currentQnaPageIndex === 0}
                >
                  <IconChevronLeftFill width={24} height={24} />
                </StyledActiveButton>
                <StyledActiveButton
                  onClick={handleNextPopularQna}
                  isButtonLastPage={currentQnaPageIndex === qnaList.length - 3}
                  isButtonDisabled={qnaList.length <= 3}
                >
                  <IconChevronRightFill width={24} height={24} />
                </StyledActiveButton>
              </Stack>
            </Flex>
            <StyledTopRankQnaWrapper>
              <StyledTopRankQnaCard currentQnaPageIndex={currentQnaPageIndex}>
                {topRankQnaList?.map((qnaList) => (
                  <QnaCard
                    id={qnaList.id}
                    title={qnaList.title}
                    category={qnaList.category}
                    writer={qnaList.writer.name}
                    likeCount={qnaList.likeCount}
                    commentCount={qnaList.commentCount}
                  />
                ))}
              </StyledTopRankQnaCard>
            </StyledTopRankQnaWrapper>
          </Stack>
          <Spacer height={60} />
          <StyledQnaContentContainer>
            <QnaCategoryBox />
            <QnaList />
          </StyledQnaContentContainer>
        </StyledQnaContainer>
      </StyledQnaLayout>
    </>
  );
};

export default withAuth(QnaPage);

const StyledQnaLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  min-height: 100vh;
`;

const StyledQnaContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 48px;
  padding-bottom: 64px;
`;

const StyledQnaContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 35px;
`;

const StyledActiveButton = styled.button<{
  isButtonFirstPage?: boolean;
  isButtonLastPage?: boolean;
  isButtonDisabled?: boolean;
}>`
  cursor: ${({ isButtonFirstPage, isButtonLastPage, isButtonDisabled }) =>
    isButtonFirstPage || isButtonLastPage || isButtonDisabled ? 'default' : 'pointer'};
  transition: color 0.2s;
  color: ${({ theme, isButtonFirstPage, isButtonLastPage, isButtonDisabled }) =>
    isButtonFirstPage || isButtonLastPage || isButtonDisabled
      ? theme.colors.gray400
      : theme.colors.gray700};

  &:hover {
    color: ${({ theme, isButtonFirstPage, isButtonLastPage, isButtonDisabled }) =>
      !(isButtonFirstPage || isButtonLastPage || isButtonDisabled) &&
      theme.colors.gray400};
  }
`;

const StyledTopRankQnaWrapper = styled.div`
  overflow: hidden;
  min-height: 185px;
`;

const StyledTopRankQnaCard = styled.div<{ currentQnaPageIndex: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQnaPageIndex }) =>
    `translateX(${-currentQnaPageIndex * (100 / 3)}%)`};
  gap: 10px;
`;

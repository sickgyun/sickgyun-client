'use client';

import styled from '@emotion/styled';
import { IconChevronLeftFill, IconChevronRightFill } from '@seed-design/icon';
import { Flex, Spacer, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import Header from '@/components/common/Header';
import QnaBox from '@/components/qna/QnaBox';
import QnaListBox from '@/components/qna/QnaListBox';
import QnaPostList from '@/components/qna/QnaPostList';
import { useAtomValue } from 'jotai';
import { qnaLengthAtom } from '@/store/user/qnaLengthAtom';

const QnaPage = () => {
  const [currentQnaPageIndex, setCurrentQnaPageIndex] = useState(0);
  const qnaLength = useAtomValue(qnaLengthAtom);

  const handlePrevPopularQna = () => {
    if (currentQnaPageIndex > 0) {
      setCurrentQnaPageIndex((prev) => prev - 1);
    }
  };

  const handleNextPopularQna = () => {
    if (currentQnaPageIndex < qnaLength - 3) {
      setCurrentQnaPageIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header />
      <StyledQnaLayout>
        <StyledQna>
          <Stack direction="vertical" spacing={15}>
            <Flex justify="space-between">
              <Text fontType="h3">인기글을 모아봤어요!</Text>
              <Stack direction="horizontal" spacing={6}>
                <StyledActiveButton
                  onClick={handlePrevPopularQna}
                  isFirstPage={currentQnaPageIndex === 0}
                >
                  <IconChevronLeftFill width={24} height={24} />
                </StyledActiveButton>
                <StyledActiveButton
                  onClick={handleNextPopularQna}
                  isLastPage={currentQnaPageIndex === qnaLength - 3}
                  isDisabled={qnaLength <= 3}
                >
                  <IconChevronRightFill width={24} height={24} />
                </StyledActiveButton>
              </Stack>
            </Flex>
            <StyledQnaListContainer>
              <QnaPostList currentQnaPageIndex={currentQnaPageIndex} />
            </StyledQnaListContainer>
          </Stack>
          <Spacer height={60} />
          <StyledQnaContent>
            <QnaBox />
            <QnaListBox />
          </StyledQnaContent>
        </StyledQna>
      </StyledQnaLayout>
    </>
  );
};

export default QnaPage;

const StyledQnaLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  min-height: 100vh;
`;

const StyledQna = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 48px;
  padding-bottom: 64px;
`;

const StyledQnaContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 35px;
`;

const StyledActiveButton = styled.button<{
  isFirstPage?: boolean;
  isLastPage?: boolean;
  isDisabled?: boolean;
}>`
  cursor: ${({ isFirstPage, isLastPage, isDisabled }) =>
    isFirstPage || isLastPage || isDisabled ? 'default' : 'pointer'};
  transition: color 0.2s;
  color: ${({ theme, isFirstPage, isLastPage, isDisabled }) =>
    isFirstPage || isLastPage || isDisabled
      ? theme.colors.gray400
      : theme.colors.gray700};

  &:hover {
    color: ${({ theme, isFirstPage, isLastPage, isDisabled }) =>
      !(isFirstPage || isLastPage || isDisabled) && theme.colors.gray400};
  }
`;

const StyledQnaListContainer = styled.div`
  overflow: hidden;
  min-height: 185px;
`;

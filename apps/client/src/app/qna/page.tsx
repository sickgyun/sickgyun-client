'use client';

import styled from '@emotion/styled';
import { ArrowLeftIcon, ArrowRightIcon, Flex, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import QnaBox from '@/components/qna-posting/QnaBox';
import QnaListBox from '@/components/qna-posting/QnaListBox';
import QnaPostList from '@/components/qna-posting/QnaPostList';
import { QNA } from '@/constants/qna';

const Qna = () => {
  const [currentQnaPageIndex, setCurrentQnaPageIndex] = useState(0);

  const handlePrevPopularQna = () => {
    if (currentQnaPageIndex > 0) {
      setCurrentQnaPageIndex((prev) => prev - 1);
    }
  };

  const handleNextPopularQna = () => {
    if (currentQnaPageIndex < QNA.length - 3) {
      setCurrentQnaPageIndex((prev) => prev + 1);
    }
  };

  const isFirstPage = currentQnaPageIndex == 0;
  const isLastPage = currentQnaPageIndex == QNA.length - 3;

  return (
    <>
      <Header />
      <StyledQnaLayout>
        <StyledQna>
          <Stack direction="vertical" spacing={15} style={{ marginBottom: '60px' }}>
            <Flex justify="space-between">
              <Text fontType="h3">🔥 인기글</Text>
              <Stack direction="horizontal" spacing={6}>
                <StyledActiveButton
                  onClick={handlePrevPopularQna}
                  isFirstPage={isFirstPage}
                >
                  <ArrowLeftIcon width={30} height={30} />
                </StyledActiveButton>
                <StyledActiveButton
                  onClick={handleNextPopularQna}
                  isLastPage={isLastPage}
                >
                  <ArrowRightIcon width={30} height={30} />
                </StyledActiveButton>
              </Stack>
            </Flex>
            <QnaPostList currentQnaPageIndex={currentQnaPageIndex} />
          </Stack>
          <StyledQnaContent>
            <QnaBox />
            <QnaListBox />
          </StyledQnaContent>
        </StyledQna>
      </StyledQnaLayout>
      <Footer />
    </>
  );
};

export default Qna;

const StyledQnaLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
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

const StyledActiveButton = styled.button<{ isFirstPage?: boolean; isLastPage?: boolean }>`
  cursor: ${({ isFirstPage, isLastPage }) =>
    isFirstPage || isLastPage ? 'default' : 'pointer'};
  transition: color 0.2s;
  color: ${({ theme, isFirstPage, isLastPage }) =>
    isFirstPage || isLastPage ? theme.colors.gray400 : theme.colors.gray700};

  &:hover {
    color: ${({ theme, isFirstPage, isLastPage }) =>
      !(isFirstPage || isLastPage) && theme.colors.gray400};
  }
`;

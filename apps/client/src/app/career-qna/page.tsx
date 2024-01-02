'use client';

import styled from '@emotion/styled';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import QnaAskBox from '@/components/qna-posting/QnaAskBox';
import QnaListBox from '@/components/qna-posting/QnaListBox';
import QnaPostingList from '@/components/qna-posting/QnaPostingList';
import { QNA_LIST } from '@/constants/qna-list';

const CareerQna = () => {
  const [currentQnaPage, setCurrentQnaPage] = useState(0);

  const handlePrevCareerQna = () => {
    setCurrentQnaPage((prevQna) => (prevQna > 0 ? prevQna - 1 : 0));
  };

  const handleNextCarrerQna = () => {
    setCurrentQnaPage((nextQna) =>
      nextQna < QNA_LIST.length - 3 ? nextQna + 1 : nextQna
    );
  };

  return (
    <>
      <Header />
      <StyledCareerQnaLayout>
        <StyledCareerQna>
          <Stack direction="vertical" spacing={15} style={{ marginBottom: '60px' }}>
            <Flex justify="space-between">
              <Text styleType="h3">🔥 인기글</Text>
              <Stack direction="horizontal" spacing={10}>
                <Stack onClick={handlePrevCareerQna}>
                  <StyledArrowImage src="/assets/arrow_left.png" />
                </Stack>
                <Stack onClick={handleNextCarrerQna}>
                  <StyledArrowImage src="/assets/arrow_right.png" />
                </Stack>
              </Stack>
            </Flex>
            <QnaPostingList currentQnaPage={currentQnaPage} />
          </Stack>
          <StyledCareerQnaAsk>
            <QnaAskBox />
            <QnaListBox />
          </StyledCareerQnaAsk>
        </StyledCareerQna>
      </StyledCareerQnaLayout>
      <Footer />
    </>
  );
};

export default CareerQna;

const StyledCareerQnaLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

const StyledCareerQna = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 48px;
  padding-bottom: 64px;
`;

const StyledArrowImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 50%;
  }
`;

const StyledCareerQnaAsk = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 35px;
`;

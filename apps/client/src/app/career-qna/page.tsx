'use client';

import styled from '@emotion/styled';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import QnaPostingList from '@/components/qna-posting/QnaPostingList';
import { QNA_LIST } from '@/constants/qna-list';

const CareerQna = () => {
  const [currentQna, setCurrentQna] = useState(0);

  const prevCareerQna = () => {
    setCurrentQna((prevQna) => (prevQna > 0 ? prevQna - 1 : 0));
  };

  const nextCareerQna = () => {
    setCurrentQna((nextQna) => (nextQna < QNA_LIST.length - 4 ? nextQna + 1 : nextQna));
  };

  return (
    <>
      <Header />
      <StyledCareerQnaLayout>
        <StyledCareerQna>
          <Stack direction="vertical" spacing={15}>
            <Flex justify="space-between">
              <Text styleType="h3">🏅 인기글</Text>
              <Stack direction="horizontal" spacing={10}>
                <StyledCareerArrow onClick={prevCareerQna}>{'<'}</StyledCareerArrow>
                <StyledCareerArrow onClick={nextCareerQna}>{'>'}</StyledCareerArrow>
              </Stack>
            </Flex>
            <QnaPostingList currentQna={currentQna} />
          </Stack>
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
`;

const StyledCareerQna = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 48px;
  padding-bottom: 64px;
`;

const StyledCareerArrow = styled.div`
  cursor: pointer;
`;

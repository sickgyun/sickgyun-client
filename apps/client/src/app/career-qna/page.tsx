'use client';

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import QnaPostingList from '@/components/qna-posting/QnaPostingList';

const CareerQna = () => {
  return (
    <>
      <Header />
      <StyledCareerQnaLayout>
        <StyledCareerQna>
          <Stack direction="vertical" spacing={15}>
            <Text styleType="h3">🏅 인기글</Text>
            <QnaPostingList />
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

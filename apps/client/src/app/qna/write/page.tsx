'use client';

import styled from '@emotion/styled';
import Header from '@/components/common/Header';
import QnaWriteCategory from '@/components/qna-posting/QnaWriteCategory';

const Write = () => {
  return (
    <>
      <Header />
      <StyledQnaWrite>
        <QnaWriteCategory />
      </StyledQnaWrite>
    </>
  );
};

export default Write;

export const StyledQnaWrite = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  margin: 0 auto;
  margin-top: 24px;
  width: 80%;
  min-height: 80vh;
  border-radius: 15px;
`;

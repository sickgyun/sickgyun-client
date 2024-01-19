'use client';

import styled from '@emotion/styled';
import { Input, Stack, Textarea } from '@sickgyun/ui';
import Header from '@/components/common/Header';
import QnaWriteCategory from '@/components/qna-posting/QnaWriteCategory';

const QnaWritePage = () => {
  return (
    <>
      <Header />
      <StyledQnaWrite>
        <QnaWriteCategory />
        <Stack style={{ padding: '22px' }}>
          <Input placeholder="제목을 작성해 주세요" style={{ border: 'none' }} />
          <Textarea
            placeholder="내용을 작성해 주세요"
            style={{ border: 'none', overflowWrap: 'break-word' }}
          />
        </Stack>
      </StyledQnaWrite>
    </>
  );
};

export default QnaWritePage;

export const StyledQnaWrite = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  margin: 0 auto;
  margin-top: 24px;
  width: 80%;
  min-height: 80vh;
  border-radius: 15px;
`;

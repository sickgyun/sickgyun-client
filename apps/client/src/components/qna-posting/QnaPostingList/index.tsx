'use client';

import styled from '@emotion/styled';
import QnaPostingCard from '../QnaPostingCard';
import { QNA_LIST } from '@/constants/qna-list';

const QnaPostingList = () => {
  return (
    <StyledQnaPostingList>
      {QNA_LIST.map((qnaPosting) => (
        <QnaPostingCard
          title={qnaPosting.title}
          question_type={qnaPosting.question_type}
          name={qnaPosting.name}
          heart={qnaPosting.heart}
          comment_count={qnaPosting.comment_count}
        />
      ))}
    </StyledQnaPostingList>
  );
};

export default QnaPostingList;

const StyledQnaPostingList = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  overflow: hidden;
`;

'use client';

import styled from '@emotion/styled';
import QnaPostingCard from '../QnaPostingCard';
import { QNA_LIST } from '@/constants/qna';

const QnaPostList = ({ currentQnaPage }) => {
  return (
    <StyledQnaPostingListContainer>
      <StyledQnaPostingList currentQnaPage={currentQnaPage}>
        {QNA_LIST.map((qnaPosting) => (
          <QnaPostingCard
            title={qnaPosting.title}
            questionType={qnaPosting.question_type}
            name={qnaPosting.name}
            heart={qnaPosting.heart}
            commentCount={qnaPosting.comment_count}
          />
        ))}
      </StyledQnaPostingList>
    </StyledQnaPostingListContainer>
  );
};

export default QnaPostList;

const StyledQnaPostingListContainer = styled.div`
  overflow: hidden;
`;

const StyledQnaPostingList = styled.div<{ currentQnaPage: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQnaPage }) => `translateX(${-currentQnaPage * (100 / 3)}%)`};
  gap: 10px;
`;

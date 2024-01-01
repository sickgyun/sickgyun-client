'use client';

import styled from '@emotion/styled';
import QnaPostingCard from '../QnaPostingCard';
import { QNA_LIST } from '@/constants/qna-list';

type StyledQnaPostingListProps = {
  currentQna: number;
};

const QnaPostingList = ({ currentQna }) => {
  return (
    <StyledQnaPostingListContainer>
      <StyledQnaPostingList currentQna={currentQna}>
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
    </StyledQnaPostingListContainer>
  );
};

export default QnaPostingList;

const StyledQnaPostingListContainer = styled.div`
  overflow: hidden;
`;

const StyledQnaPostingList = styled.div<StyledQnaPostingListProps>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQna }) => `translateX(${-currentQna * (100 / 3)}%)`};
  gap: 12px;
`;

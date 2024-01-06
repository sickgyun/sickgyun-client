'use client';

import styled from '@emotion/styled';
import QnaPostCard from '../QnaPostCard';
import { QNA } from '@/constants/qna';

const QnaPostList = ({ currentQnaPageIndex }) => {
  return (
    <StyledQnaPostListContainer>
      <StyledQnaPostList currentQnaPageIndex={currentQnaPageIndex}>
        {QNA.map((qnaPosting) => (
          <QnaPostCard
            title={qnaPosting.title}
            questionType={qnaPosting.questionType}
            name={qnaPosting.name}
            heart={qnaPosting.heart}
            commentCount={qnaPosting.commentCount}
          />
        ))}
      </StyledQnaPostList>
    </StyledQnaPostListContainer>
  );
};

export default QnaPostList;

const StyledQnaPostListContainer = styled.div`
  overflow: hidden;
`;

const StyledQnaPostList = styled.div<{ currentQnaPageIndex: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQnaPageIndex }) =>
    `translateX(${-currentQnaPageIndex * (100 / 3)}%)`};
  gap: 10px;
`;

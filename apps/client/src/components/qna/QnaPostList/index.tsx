'use client';

import styled from '@emotion/styled';
import QnaPostCard from '../QnaPostCard';
import { QNA } from '@/constants/qna';

const QnaPostList = ({ currentQnaPageIndex }) => {
  return (
    <StyledQnaPostListContainer>
      <StyledQnaPostList currentQnaPageIndex={currentQnaPageIndex}>
        {QNA.map((qnaList) => (
          <QnaPostCard
            key={qnaList.id}
            id={qnaList.id}
            title={qnaList.title}
            questionType={qnaList.questionType}
            name={qnaList.name}
            heart={qnaList.heart}
            commentCount={qnaList.commentCount}
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

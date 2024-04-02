'use client';

import styled from '@emotion/styled';
import QnaPostCard from '../QnaPostCard';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';
import { withSuspense } from '@/hocs/withSuspense';

const QnaPostList = ({ currentQnaPageIndex }) => {
  const { qnaList } = useGetQnaList();
  const topRankArr = qnaList.slice(0, 9);

  console.log('sdf', topRankArr);

  return (
    <StyledQnaPostListContainer>
      <StyledQnaPostList currentQnaPageIndex={currentQnaPageIndex}>
        {topRankArr.map((qnaList) => (
          <QnaPostCard
            id={qnaList.id}
            title={qnaList.title}
            category={qnaList.category}
          />
        ))}
      </StyledQnaPostList>
    </StyledQnaPostListContainer>
  );
};

export default withSuspense(QnaPostList);

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

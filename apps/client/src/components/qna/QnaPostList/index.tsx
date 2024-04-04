'use client';

import styled from '@emotion/styled';
import QnaPostCard from '../QnaPostCard';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';
import { withSuspense } from '@/hocs/withSuspense';
import { qnaLengthAtom } from '@/store/user/qnaLengthAtom';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const QnaPostList = ({ currentQnaPageIndex }) => {
  const { qnaList } = useGetQnaList();
  const topRankArr = qnaList.slice(0, 9);
  const setQnaLength = useSetAtom(qnaLengthAtom);

  useEffect(() => {
    setQnaLength(topRankArr.length);
  }, [qnaList]);

  return (
    <StyledQnaPostList currentQnaPageIndex={currentQnaPageIndex}>
      {topRankArr?.map((qnaList) => (
        <QnaPostCard
          id={qnaList.id}
          title={qnaList.title}
          category={qnaList.category}
          likeCount={qnaList.likeCount}
          commentCount={qnaList.commentCount}
        />
      ))}
    </StyledQnaPostList>
  );
};

export default withSuspense(QnaPostList);

const StyledQnaPostList = styled.div<{ currentQnaPageIndex: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQnaPageIndex }) =>
    `translateX(${-currentQnaPageIndex * (100 / 3)}%)`};
  gap: 10px;
`;

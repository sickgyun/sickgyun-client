'use client';

import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import QnaCard from '../QnaCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';
import { qnaLengthAtom } from '@/store/user/qnaLengthAtom';

const QnaList = ({ currentQnaPageIndex }) => {
  const { qnaList } = useGetQnaList();
  const topRankList = qnaList.slice(0, 9);
  const setQnaLength = useSetAtom(qnaLengthAtom);

  useEffect(() => {
    setQnaLength(topRankList.length);
  }, [setQnaLength, topRankList]);

  return (
    <StyledQnaList currentQnaPageIndex={currentQnaPageIndex}>
      {topRankList?.map((qnaList) => (
        <QnaCard
          id={qnaList.id}
          title={qnaList.title}
          category={qnaList.category}
          likeCount={qnaList.likeCount}
          commentCount={qnaList.commentCount}
        />
      ))}
    </StyledQnaList>
  );
};

export default withSuspense(QnaList);

const StyledQnaList = styled.div<{ currentQnaPageIndex: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
  transform: ${({ currentQnaPageIndex }) =>
    `translateX(${-currentQnaPageIndex * (100 / 3)}%)`};
  gap: 10px;
`;

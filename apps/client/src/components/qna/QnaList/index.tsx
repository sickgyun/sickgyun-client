import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import QnaBox from '../QnaBox';
import { QNA_SORT } from '@/constants/qna';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';

const QnaList = () => {
  const params = useSearchParams();
  const categoryParam = params.get('category');

  const [selectedQnaSortText, setSelectedQnaSortText] = useState(0);
  const { qnaList } = useGetQnaList(
    [categoryParam],
    QNA_SORT[selectedQnaSortText]?.qnaType
  );

  return (
    <StyledQnaList>
      {QNA_SORT.map((qna) => (
        <StyledQnaSortText
          key={qna.id}
          fontType="p1"
          onClick={() => setSelectedQnaSortText(qna.id)}
          isSelected={selectedQnaSortText === qna.id}
        >
          {qna.title}
        </StyledQnaSortText>
      ))}
      <StyledQnaBoxContainer>
        {qnaList.length > 0 ? (
          qnaList.map((qna) => <QnaBox key={qna.id} {...qna} />)
        ) : (
          <Text fontType="body1" style={{ marginBottom: '20px' }}>
            앗! 아직 질문이 올라오지 않았어요..
          </Text>
        )}
      </StyledQnaBoxContainer>
    </StyledQnaList>
  );
};

export default withSuspense(QnaList);

const StyledQnaList = styled.div``;

const StyledQnaSortText = styled(Text)<{ isSelected: boolean }>`
  margin-right: 7px;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;

const StyledQnaBoxContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  gap: 20px;
  cursor: pointer;
`;

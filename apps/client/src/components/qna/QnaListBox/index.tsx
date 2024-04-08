import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { QNA_SORT } from '@/constants/qna';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';
import QnaChildBox from '../QnaChildBox';

const QnaListBox = () => {
  const params = useSearchParams();
  const categoryParam = params.get('category');

  const [selectedQna, setSelectedQna] = useState(0);
  const { qnaList } = useGetQnaList([categoryParam], QNA_SORT[selectedQna]?.qnaType);

  return (
    <StyledQnaListBox>
      {QNA_SORT.map((qna) => (
        <Text
          fontType="p1"
          onClick={() => setSelectedQna(qna.id)}
          style={{
            marginRight: '7px',
            cursor: 'pointer',
            fontWeight: selectedQna === qna.id ? 'bold' : 'normal',
          }}
          key={qna.id}
        >
          {qna.title}
        </Text>
      ))}
      <StyledQnaBoxWrapper>
        {qnaList.length > 0 ? (
          qnaList.map((qna) => <QnaChildBox {...qna} />)
        ) : (
          <Text fontType="body1" style={{ marginBottom: '20px' }}>
            앗! 아직 질문이 올라오지 않았어요..
          </Text>
        )}
      </StyledQnaBoxWrapper>
    </StyledQnaListBox>
  );
};

export default withSuspense(QnaListBox);

const StyledQnaListBox = styled.div``;

const StyledQnaBoxWrapper = styled.div`
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

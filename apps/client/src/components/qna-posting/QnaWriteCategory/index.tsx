import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import QnaCategory from '../QnaCategory';
import { QNA_WRITE_CATEGORY } from '@/constants/qna-write';

const QnaWriteCategory = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(3);

  return (
    <StyledQnaWriteCategory>
      <Text fontType="h4" style={{ fontWeight: 'bold' }}>
        카테고리
      </Text>
      <Stack direction="horizontal" spacing={10}>
        {QNA_WRITE_CATEGORY.map((category) => (
          <QnaCategory
            questionType={category.title}
            isWriteCategory
            isActive={activeCategoryIndex === category.id}
            onClick={() => setActiveCategoryIndex(category.id)}
          />
        ))}
      </Stack>
    </StyledQnaWriteCategory>
  );
};

export default QnaWriteCategory;

const StyledQnaWriteCategory = styled.div`
  width: 100%;
  height: 115px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

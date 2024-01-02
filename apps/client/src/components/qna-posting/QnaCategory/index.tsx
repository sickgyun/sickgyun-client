import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import React from 'react';

type QnaCategoryProps = {
  question_type: string;
};

const QnaCategory = ({ question_type }: QnaCategoryProps) => {
  const question_type_emoji =
    question_type === '취업' ? '👔' : question_type === '개발' ? '💻' : '🤔';

  return (
    <StyledQnaCategory>
      <Text>{question_type_emoji}</Text>
      <Text styleType="body2">{question_type}</Text>
    </StyledQnaCategory>
  );
};

export default QnaCategory;

const StyledQnaCategory = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 5px 13px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 30px;
`;

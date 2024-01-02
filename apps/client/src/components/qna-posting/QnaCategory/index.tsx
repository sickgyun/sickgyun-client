import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

type QnaCategoryProps = {
  questionType: string;
};

const QnaCategory = ({ questionType }: QnaCategoryProps) => {
  const questionTypeEmoji =
    questionType === '취업' ? '👔' : questionType === '개발' ? '💻' : '🤔';

  return (
    <StyledQnaCategory>
      <Text>{questionTypeEmoji}</Text>
      <Text fontType="body2">{questionType}</Text>
    </StyledQnaCategory>
  );
};

export default QnaCategory;

const StyledQnaCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 5px 13px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 30px;
`;

import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

type QnaCategoryProps = {
  questionType: string;
  questionTitle: string;
};

const QnaCategory = ({ questionType, questionTitle }: QnaCategoryProps) => {
  const questionTypeEmoji =
    questionType === 'RECRUIT' ? '👔' : questionType === 'DEVELOP' ? '💻' : '🤔';

  return (
    <StyledQnaCategory>
      <Text>{questionTypeEmoji}</Text>
      <Text fontType="body2">{questionTitle}</Text>
    </StyledQnaCategory>
  );
};

export default QnaCategory;

const StyledQnaCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  gap: 7px;
  padding: 5px 13px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 30px;
`;

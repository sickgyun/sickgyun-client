import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { Qna } from '@/types/qna';

type QnaCategoryProps = {
  questionType: Qna;
};

const QnaCategory = ({ questionType }: QnaCategoryProps) => {
  let emoji: string;
  let categoryTitle: string;

  switch (questionType) {
    case Qna.DEVELOP:
      emoji = '💻';
      categoryTitle = '개발';
      break;
    case Qna.RECRUIT:
      emoji = '👔';
      categoryTitle = '취업';
      break;
    case Qna.CONCERN:
      emoji = '🤔';
      categoryTitle = '고민';
      break;
    default:
      emoji = '';
      categoryTitle = '';
  }

  return (
    <StyledQnaCategory>
      <Text>{emoji}</Text>
      <Text fontType="body2">{categoryTitle}</Text>
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

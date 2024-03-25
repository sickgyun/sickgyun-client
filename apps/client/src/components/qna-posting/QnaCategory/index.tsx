import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

type QnaCategoryProps = {
  questionType: string;
  questionTitle: string;
  isWriteCategory?: boolean;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const QnaCategory = ({
  questionType,
  questionTitle,
  isWriteCategory,
  isActive,
  onClick,
}: QnaCategoryProps) => {
  const questionTypeEmoji =
    questionType === 'RECRUIT' ? '👔' : questionType === 'DEVELOP' ? '💻' : '🤔';

  return (
    <StyledQnaCategory
      isWriteCategory={isWriteCategory}
      isActive={isActive}
      onClick={onClick}
    >
      <Text>{questionTypeEmoji}</Text>
      <Text fontType="body2">{questionTitle}</Text>
    </StyledQnaCategory>
  );
};

export default QnaCategory;

const StyledQnaCategory = styled.div<{ isWriteCategory: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  gap: 7px;
  padding: 5px 13px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 30px;
  ${({ theme, isWriteCategory, isActive }) =>
    isWriteCategory &&
    css`
      border: 1px solid ${isActive ? theme.colors.primary : theme.colors.gray300};
      cursor: pointer;
      background-color: ${isActive ? theme.colors.primary : theme.colors.white};
      & > span {
        color: ${isActive && theme.colors.white};
      }
    `}
`;

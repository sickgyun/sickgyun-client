'use client';

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';

type QnaPostingCardProps = {
  title: string;
  question_type: string;
  name: string;
  heart: number;
  comment_count: number;
};

const QnaPostingCard = ({
  title,
  question_type,
  name,
  heart,
  comment_count,
}: QnaPostingCardProps) => {
  const question_type_emoji =
    question_type === '취업' ? '👔' : question_type === '커리어' ? '💼' : '🚀';

  return (
    <StyledQnaPostingCard>
      <Stack direction="vertical" spacing={0}>
        <StyledPopularQnaContent>
          <StyledQnaCategory>
            <Text>{question_type_emoji}</Text>
            <Text styleType="body2">{question_type}</Text>
          </StyledQnaCategory>
          <Text styleType="h4">{title}</Text>
        </StyledPopularQnaContent>
        <StyledPopularInfo>
          <Text>{name}</Text>
          <Stack direction="horizontal" spacing={8}>
            <Text>{heart}</Text>
            <Text>{comment_count}</Text>
          </Stack>
        </StyledPopularInfo>
      </Stack>
    </StyledQnaPostingCard>
  );
};

export default QnaPostingCard;

const StyledQnaPostingCard = styled.div`
  width: calc((100% - 24px) / 3);
  height: 185px;
  background-color: ${({ theme }) => theme.colors.gray100};
  flex: 0 0 auto;
  cursor: pointer;
  border-radius: 12px;
`;

const StyledPopularQnaContent = styled.div`
  height: 145px;
  border-radius: 12px 12px 0 0;
  padding: 24px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledQnaCategory = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 14px;
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 30px;
`;

const StyledPopularInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0 0 12px 12px;
`;

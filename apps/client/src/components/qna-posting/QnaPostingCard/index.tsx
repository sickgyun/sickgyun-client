'use client';

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import QnaCategory from '../QnaCategory';

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
  return (
    <StyledQnaPostingCard>
      <Stack direction="vertical" spacing={0}>
        <StyledPopularQnaContent>
          <QnaCategory question_type={question_type} />
          <StyledEllipsisText styleType="h4">{title}</StyledEllipsisText>
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
  width: calc((100% / 3) - 10px);
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

const StyledEllipsisText = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

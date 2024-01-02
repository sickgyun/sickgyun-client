'use client';

import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import QnaCategory from '../QnaCategory';

type QnaPostingCardProps = {
  title: string;
  questionType: string;
  name: string;
  heart: number;
  commentCount: number;
};

const QnaPostingCard = ({
  title,
  questionType,
  name,
  heart,
  commentCount,
}: QnaPostingCardProps) => {
  return (
    <StyledQnaPostingCard>
      <Flex direction="column">
        <StyledPopularQnaContent>
          <QnaCategory questionType={questionType} />
          <StyledQnaContent fontType="h4">{title}</StyledQnaContent>
        </StyledPopularQnaContent>
        <StyledPopularInfo>
          <Text>{name}</Text>
          <Stack direction="horizontal" spacing={12}>
            <Flex alignItems="center" gap="3px">
              <StyledIconImage src="/assets/heart.png" alt="Banner" />
              <Text fontType="body2">{heart}</Text>
            </Flex>
            <Flex alignItems="center" gap="3px">
              <StyledIconImage src="/assets/heart.png" alt="Banner" />
              <Text fontType="body2">{commentCount}</Text>
            </Flex>
          </Stack>
        </StyledPopularInfo>
      </Flex>
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

const StyledQnaContent = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledIconImage = styled.img`
  height: 12px;
  width: 12px;
`;

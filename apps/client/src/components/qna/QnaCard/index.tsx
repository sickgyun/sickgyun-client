'use client';

import styled from '@emotion/styled';
import { IconHeartFill, IconHeartRegular, IconReplyRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import QnaCategory from '../QnaCategory';
import type { Qna } from '@/types/qna';
import { useGetQnaLike } from '@/hooks/api/qna/useGetQnaLike';

type QnaPostingCardProps = {
  id: number;
  title: string;
  category: string;
  writer: string;
  likeCount: number;
  commentCount: number;
};

const QnaCard = ({
  id,
  title,
  category,
  writer,
  likeCount,
  commentCount,
}: QnaPostingCardProps) => {
  const router = useRouter();
  const { qnaLike } = useGetQnaLike(Number(id));

  const handleGoQnaDetailPage = (id: number) => {
    router.push(`/qna/${id}`);
  };
  return (
    <StyledQnaCard onClick={() => handleGoQnaDetailPage(id)}>
      <Flex direction="column">
        <StyledPopularQnaContent>
          <QnaCategory questionType={category as Qna} />
          <StyledQnaContent fontType="h4">{title}</StyledQnaContent>
        </StyledPopularQnaContent>
        <StyledPopularInfo>
          <Text>{writer}</Text>
          <Stack direction="horizontal" spacing={12}>
            <Stack direction="horizontal" align="center" spacing={3}>
              {qnaLike ? (
                <IconHeartFill width={16} height={16} color={colors.red} />
              ) : (
                <IconHeartRegular width={16} height={16} />
              )}
              <Text fontType="body2" style={{ marginTop: '2px' }}>
                {likeCount}
              </Text>
            </Stack>
            <Stack direction="horizontal" align="center" spacing={3}>
              <IconReplyRegular width={16} height={16} color={colors.black} />
              <Text fontType="body2" style={{ marginTop: '2px' }}>
                {commentCount}
              </Text>
            </Stack>
          </Stack>
        </StyledPopularInfo>
      </Flex>
    </StyledQnaCard>
  );
};

export default QnaCard;

const StyledQnaCard = styled.div`
  width: calc((100% / 3) - 10px);
  height: 185px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 12px;
`;

const StyledPopularQnaContent = styled.div`
  height: 140px;
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
  height: 45px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0 0 12px 12px;
`;

const StyledQnaContent = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

import styled from '@emotion/styled';
import { IconHeartFill, IconHeartRegular, IconReplyRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import QnaCategory from '../QnaCategory';
import { useGetQnaLike } from '@/hooks/api/qna/useGetQnaLike';
import type { Qna } from '@/types/qna';
import { timeAgo } from '@/utils/timeAgo';

type QnaBoxProps = {
  id: number;
  category: Qna;
  title: string;
  content: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

const QnaBox = (qna: QnaBoxProps) => {
  const router = useRouter();

  const handleGoDetailQnaPage = (id: number) => {
    router.push(`/qna/${id}`);
  };

  const { qnaLike } = useGetQnaLike(Number(qna.id));

  return (
    <StyledQnaBox key={qna.id} onClick={() => handleGoDetailQnaPage(qna.id)}>
      <Flex direction="column">
        <StyledQnaContentContainer>
          <QnaCategory questionType={qna.category} />
          <Text fontType="h4">{qna.title}</Text>
          <StyledQnaContent>{qna.content}</StyledQnaContent>
          <Flex justify="space-between" style={{ width: '100%' }}>
            <Stack spacing={12} direction="horizontal">
              <Text fontType="body2">{timeAgo(qna.createTime)}</Text>
            </Stack>
            <Stack spacing={12} direction="horizontal">
              <Stack direction="horizontal" align="center" spacing={3}>
                {qnaLike ? (
                  <IconHeartFill width={16} height={16} color={colors.red} />
                ) : (
                  <IconHeartRegular width={16} height={16} />
                )}
                <Text fontType="body2" style={{ marginTop: '2px' }}>
                  {qna.likeCount}
                </Text>
              </Stack>
              <Stack direction="horizontal" align="center" spacing={3}>
                <IconReplyRegular width={16} height={16} color={colors.gray900} />
                <Text fontType="body2" style={{ marginTop: '2px' }}>
                  {qna.commentCount}
                </Text>
              </Stack>
            </Stack>
          </Flex>
        </StyledQnaContentContainer>
      </Flex>
    </StyledQnaBox>
  );
};

export default QnaBox;

const StyledQnaBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledQnaContentContainer = styled.div`
  height: 170px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const StyledQnaContent = styled(Text)`
  height: 46px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

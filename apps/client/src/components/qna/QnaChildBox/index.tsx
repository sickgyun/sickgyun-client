import styled from '@emotion/styled';
import { IconHeartFill, IconHeartRegular, IconReplyRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import QnaCategory from '../QnaCategory';
import type { Qna } from '@/types/qna';
import { timeAgo } from '@/utils/timeAgo';
import { useGetQnaLike } from '@/hooks/api/qna/useGetQnaLike';
import { useRouter } from 'next/navigation';

type qnaChildBoxProps = {
  id: number;
  category: string;
  title: string;
  content: string;
  createTime: string;
  likeCount: number;
  commentCount: number;
};

const QnaChildBox = ({
  id,
  category,
  title,
  content,
  createTime,
  likeCount,
  commentCount,
}: qnaChildBoxProps) => {
  const router = useRouter();

  const handleGoDetailPage = (id: number) => {
    router.push(`/qna/${id}`);
  };

  const { qnaLike } = useGetQnaLike(Number(id));

  return (
    <StyledQnaBox onClick={() => handleGoDetailPage(id)} key={id}>
      <Flex direction="column">
        <StyledPopularQna>
          <QnaCategory questionType={category as Qna} />
          <Text fontType="h4">{title}</Text>
          <StyledQnaContent>{content}</StyledQnaContent>
          <Flex justify="space-between" style={{ width: '100%' }}>
            <Stack spacing={12} direction="horizontal">
              <Text fontType="body2">{timeAgo(createTime)}</Text>
            </Stack>
            <Stack spacing={12} direction="horizontal">
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
          </Flex>
        </StyledPopularQna>
      </Flex>
    </StyledQnaBox>
  );
};

export default QnaChildBox;

const StyledQnaBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledPopularQna = styled.div`
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

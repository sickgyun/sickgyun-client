import styled from '@emotion/styled';
import { IconHeartRegular, IconReplyRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import dayjs from 'dayjs';
import QnaCategory from '../QnaCategory';
import { QNA_SORT } from '@/constants/qna';
import { Qna } from '@/types/qna';
import { useGetQnaList } from '@/hooks/api/qna/useGetQnaList';
import { withSuspense } from '@/hocs/withSuspense';

const QnaListBox = () => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryParam = params.get('category');

  const [selectedQna, setSelectedQna] = useState(0);

  const { qnaList } = useGetQnaList([categoryParam]);

  const currentDate = dayjs();

  const handleGoDetailPage = (id: number) => {
    router.push(`/qna/${id}`);
  };

  return (
    <StyledQnaListBox>
      {QNA_SORT.map((qna) => (
        <Text
          fontType="p1"
          onClick={() => setSelectedQna(qna.id)}
          style={{
            marginRight: '7px',
            cursor: 'pointer',
            fontWeight: selectedQna === qna.id ? 'bold' : 'normal',
          }}
        >
          {qna.title}
        </Text>
      ))}
      <StyledQnaBoxWrapper>
        {qnaList.length > 0 ? (
          qnaList.map((qna) => {
            const createTime = dayjs(qna.createTime);
            const currentTime = currentDate.diff(createTime, 'minutes');

            let timeAgo: string;
            if (currentTime < 1440) timeAgo = `${Math.floor(currentTime / 60)}시간 전`;
            else timeAgo = `${Math.floor(currentTime / 1440)}일 전`;

            return (
              <StyledQnaBox onClick={() => handleGoDetailPage(qna.id)}>
                <Flex direction="column">
                  <StyledPopularQna>
                    <QnaCategory questionType={qna.category as unknown as Qna} />
                    <Text fontType="h4">{qna.title}</Text>
                    <StyledQnaContent>{qna.content}</StyledQnaContent>
                    <Flex justify="space-between" style={{ width: '100%' }}>
                      <Stack spacing={12} direction="horizontal">
                        <Text fontType="body2">{timeAgo}</Text>
                      </Stack>
                      <Stack spacing={12} direction="horizontal">
                        <Stack direction="horizontal" align="center" spacing={3}>
                          <IconHeartRegular width={16} height={16} color={colors.black} />
                          <Text fontType="body2" style={{ marginTop: '2px' }}>
                            {3}
                          </Text>
                        </Stack>
                        <Stack direction="horizontal" align="center" spacing={3}>
                          <IconReplyRegular width={16} height={16} color={colors.black} />
                          <Text fontType="body2" style={{ marginTop: '2px' }}>
                            {3}
                          </Text>
                        </Stack>
                      </Stack>
                    </Flex>
                  </StyledPopularQna>
                </Flex>
              </StyledQnaBox>
            );
          })
        ) : (
          <Text fontType="body1">앗! 아직 질문이 올라오지 않았어요..</Text>
        )}
      </StyledQnaBoxWrapper>
    </StyledQnaListBox>
  );
};

export default withSuspense(QnaListBox);

const StyledQnaListBox = styled.div``;

const StyledQnaBoxWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  gap: 20px;
  cursor: pointer;
`;

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

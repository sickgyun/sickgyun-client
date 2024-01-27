import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { CommentIcon, Flex, HeartIcon, Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import QnaCategory from '../QnaCategory';
import { QNA, QNA_SORT } from '@/constants/qna';

const QnaListBox = () => {
  const [selectedQna, setSelectedQna] = useState(0);

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
        {QNA.map((qna) => (
          <StyledQnaBox>
            <Flex direction="column">
              <StyledPopularQna>
                <QnaCategory questionType={qna.questionType} />
                <Text fontType="h4">{qna.title}</Text>
                <StyledQnaContent>{qna.detailContent}</StyledQnaContent>
                <Flex justify="space-between" style={{ width: '100%' }}>
                  <Stack spacing={12} direction="horizontal">
                    <Text fontType="body2">{qna.name}</Text>
                    <Text fontType="body2">6일 전</Text>
                  </Stack>
                  <Stack spacing={12} direction="horizontal">
                    <Stack direction="horizontal" align="center" spacing={3}>
                      <HeartIcon width={16} height={16} color={colors.black} />
                      <Text fontType="body2" style={{ marginTop: '2px' }}>
                        {qna.heart}
                      </Text>
                    </Stack>
                    <Stack direction="horizontal" align="center" spacing={3}>
                      <CommentIcon width={16} height={16} color={colors.black} />
                      <Text fontType="body2" style={{ marginTop: '2px' }}>
                        {qna.commentCount}
                      </Text>
                    </Stack>
                  </Stack>
                </Flex>
              </StyledPopularQna>
            </Flex>
          </StyledQnaBox>
        ))}
      </StyledQnaBoxWrapper>
    </StyledQnaListBox>
  );
};

export default QnaListBox;

const StyledQnaListBox = styled.div``;

const StyledQnaBoxWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
`;

const StyledQnaBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

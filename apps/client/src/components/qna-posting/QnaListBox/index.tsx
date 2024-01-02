import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import { useState } from 'react';
import QnaCategory from '../QnaCategory';
import { QNA_LIST } from '@/constants/qna';
import { QNA_SORT } from '@/constants/qna-sort';

const QnaListBox = () => {
  const [selectedTitle, setSelectedTitle] = useState(0);

  return (
    <StyledQnaListBox>
      {QNA_SORT.map((qna) => (
        <Text
          key={qna.id}
          fontType="p1"
          onClick={() => setSelectedTitle(qna.id)}
          style={{
            marginRight: '7px',
            cursor: 'pointer',
            fontWeight: selectedTitle === qna.id ? 'bold' : 'normal',
          }}
        >
          {qna.title}
        </Text>
      ))}
      <StyledQnaBoxWrapper>
        {QNA_LIST.map((qna) => (
          <StyledQnaBox>
            <Stack direction="vertical" spacing={0}>
              <StyledPopularQnaContent>
                <QnaCategory questionType={qna.question_type} />
                <Text fontType="h4">{qna.title}</Text>
                <StyledQnaContent>{qna.detail_content}</StyledQnaContent>
                <Flex justifyContent="space-between" style={{ width: '100%' }}>
                  <Stack spacing={12} direction="horizontal">
                    <Text fontType="body2">{qna.name}</Text>
                    <Text fontType="body2">6일 전</Text>
                  </Stack>
                  <Stack spacing={12} direction="horizontal">
                    <Flex alignItems="center" gap="3px">
                      <StyledIconImage src="/assets/heart.png" alt="Banner" />
                      <Text fontType="body2">{qna.heart}</Text>
                    </Flex>
                    <Flex alignItems="center" gap="3px">
                      <StyledIconImage src="/assets/comment.png" alt="Banner" />
                      <Text fontType="body2">{qna.comment_count}</Text>
                    </Flex>
                  </Stack>
                </Flex>
              </StyledPopularQnaContent>
            </Stack>
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
  background-color: ${({ theme }) => theme.colors.gray100};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledPopularQnaContent = styled.div`
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

const StyledIconImage = styled.img`
  height: 12px;
  width: 12px;
`;

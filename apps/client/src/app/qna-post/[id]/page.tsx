'use client';

import styled from '@emotion/styled';
import { IconEmoticonThin, IconHeartRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import Header from '@/components/common/Header';
import QnaCategory from '@/components/qna/QnaCategory';
import QnaComment from '@/components/qna/QnaComment';

const QnaPostPage = () => {
  return (
    <>
      <Header />
      <StyledQnaPostLayout>
        <StyledQnaPost>
          <Stack style={{ display: 'inline-flex' }}>
            <QnaCategory questionType="취업" />
          </Stack>
          <Stack style={{ marginTop: '15px' }}>
            <Text fontType="h3">연봉과 업무 중 무엇을 선택하는게 좋을지..</Text>
          </Stack>
          <Flex
            justify="space-between"
            style={{
              marginTop: '10px',
              paddingBottom: '25px',
              borderBottom: `1px solid ${colors.gray200}`,
            }}
          >
            <Stack direction="horizontal" spacing={10}>
              <Text fontType="p2">lsj0202</Text>
              <Text fontType="p2" color="gray500">
                5일 전
              </Text>
            </Stack>
            <Stack direction="horizontal" align="center" spacing={3}>
              <IconEmoticonThin // eye-icon 으로 바꿔야함
                width={20}
                height={20}
                color={colors.gray500}
              />
              <Text fontType="p2" color="gray500">
                조회 22
              </Text>
            </Stack>
          </Flex>
          <Stack style={{ borderBottom: `1px solid ${colors.gray200}` }}>
            <Stack style={{ paddingTop: '30px', paddingBottom: '15px' }}>
              연봉을 많이 주지만 범위가 좁고 루틴한 업무를 맡게될 회사.. 연봉은 적지만..
              다양한 업무를 맡을수 있는 회사.. (그리고.. 바쁨..) 어느 회사를 선택하는게
              좋을까요? 결정을 못하겠어요
            </Stack>
            <Stack
              align="center"
              justify="center"
              style={{ width: '100%', marginBottom: '30px' }}
            >
              <StyledQnaLikeButton>
                <IconHeartRegular width={16} height={16} color={colors.black} />
                <Text>9</Text>
              </StyledQnaLikeButton>
            </Stack>
          </Stack>
          <QnaComment />
        </StyledQnaPost>
      </StyledQnaPostLayout>
    </>
  );
};

export default QnaPostPage;

const StyledQnaPostLayout = styled.div`
  width: 100%;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StyledQnaPost = styled.div`
  width: 800px;
  border-radius: 12px;
  background-color: white;
  min-height: 80vh;
  padding: 25px;
`;

const StyledQnaLikeButton = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  gap: 5px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
`;

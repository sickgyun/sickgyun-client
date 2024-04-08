'use client';

import styled from '@emotion/styled';
import { IconHeartFill, IconHeartRegular, IconSettingFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Spacer, Stack, Text } from '@sickgyun/ui';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/common/Header';
import QnaCategory from '@/components/qna/QnaCategory';
import QnaComment from '@/components/qna/QnaComment';
import QnaModifyBox from '@/components/qna/QnaModifyBox';
import { useCreateQnaLike } from '@/hooks/api/qna/useCreateQnaLike';
import { useDeleteQnaLike } from '@/hooks/api/qna/useDeleteQnaLike';
import { useGetQnaCard } from '@/hooks/api/qna/useGetQnaCard';
import { useGetQnaLike } from '@/hooks/api/qna/useGetQnaLike';
import type { Qna } from '@/types/qna';
import { timeAgo } from '@/utils/timeAgo';

const QnaDetailPage = () => {
  const [isOpenQnaEditModal, setIsOpenQnaEditModal] = useState(false);
  const { id } = useParams();

  const { qnaCard } = useGetQnaCard(Number(id));
  const { qnaLike } = useGetQnaLike(Number(id));
  const { mutate: qnaCreateLikeMutate } = useCreateQnaLike(Number(id));
  const { mutate: qnaDeleteLikeMutate } = useDeleteQnaLike(Number(id));

  const handleCreateAndDeleteQnaLike = () => {
    if (qnaLike) {
      qnaDeleteLikeMutate();
    } else {
      qnaCreateLikeMutate();
    }
  };

  const openQnaEditModal = () => {
    setIsOpenQnaEditModal((prev) => !prev);
  };
  return (
    <>
      <Header />
      <StyledQnaDetailLayout>
        <StyledQnaDetail>
          <Flex align="flex-start" justify="space-between">
            <Stack style={{ display: 'inline-flex' }}>
              <QnaCategory questionType={qnaCard?.category as Qna} />
            </Stack>
            <StyledSettingButtonContainer>
              <StyledSettingButton onClick={openQnaEditModal} />
              {isOpenQnaEditModal && <QnaModifyBox qnaId={qnaCard?.id} />}
            </StyledSettingButtonContainer>
          </Flex>
          <Stack style={{ marginTop: '15px', minHeight: '28px' }}>
            <Text fontType="h3">{qnaCard?.title}</Text>
          </Stack>
          <StyledQnaDetailSubTitleBox>
            <Stack direction="horizontal" spacing={10}>
              <Text fontType="p2" style={{ minWidth: '25px' }}>
                {qnaCard?.writer}
              </Text>
              <Text fontType="p2" color="gray500">
                {timeAgo(qnaCard?.createTime)}
              </Text>
            </Stack>
          </StyledQnaDetailSubTitleBox>
          <Stack style={{ borderBottom: `1px solid ${colors.gray200}` }}>
            <StyledQnaContent>{qnaCard?.content}</StyledQnaContent>
            <Flex align="center" justify="center">
              <StyledLikeButtonContainer onClick={handleCreateAndDeleteQnaLike}>
                {qnaLike ? (
                  <IconHeartFill width={16} height={16} color={colors.red} />
                ) : (
                  <IconHeartRegular width={16} height={16} />
                )}
                <Text>{qnaCard?.likeCount}</Text>
              </StyledLikeButtonContainer>
            </Flex>
            <Spacer height={5} />
          </Stack>
          <QnaComment commentCount={qnaCard?.commentCount} />
        </StyledQnaDetail>
      </StyledQnaDetailLayout>
    </>
  );
};

export default QnaDetailPage;

const StyledQnaDetailLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const StyledQnaDetail = styled.div`
  width: 800px;
  border-radius: 12px;
  background-color: white;
  min-height: 80%;
  padding: 25px;
`;

const StyledLikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 65px;
  min-height: 34px;
  padding: 5px 16px;
  gap: 5px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
`;

const StyledQnaContent = styled.div`
  min-height: 56px;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const StyledSettingButtonContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledSettingButton = styled(IconSettingFill)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledQnaDetailSubTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

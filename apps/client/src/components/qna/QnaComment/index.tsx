import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { Button, Flex, Stack, Text, Textarea } from '@sickgyun/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGetQnaComment } from '@/hooks/api/qna/useGetComment';
import { IconSettingFill } from '@seed-design/icon';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import {
  CreateQnaCommentRequest,
  useCreateQnaComment,
} from '@/hooks/api/qna/useCreateComment';
import { useUser } from '@/hooks/common/useUser';
import QnaCommentModifyBox from '../QnaCommentModifyBox';

type QnaCommentProps = {
  commentCount: number;
};

const QnaComment = ({ commentCount }: QnaCommentProps) => {
  const { id } = useParams();
  const { qnaComment } = useGetQnaComment(Number(id));
  const { mutate: qnaCommentMutate } = useCreateQnaComment(Number(id));
  const { user } = useUser();

  const [isOpenQnaCommentEditModal, setIsOpenQnaCommentEditModal] = useState([]);

  const toggleQnaCommentEditModal = (commentId: number) => {
    setIsOpenQnaCommentEditModal((prev) => {
      if (prev.includes(commentId)) return prev.filter((id) => id !== commentId);
      else return [...prev, commentId];
    });
  };

  const {
    register,
    handleSubmit: createQnaCommentSubmit,
    reset,
  } = useForm<CreateQnaCommentRequest>();

  const onCreateQnaCommentSubmit: SubmitHandler<CreateQnaCommentRequest> = (data) => {
    qnaCommentMutate(data);
    reset();
  };

  return (
    <StyledQnaComment>
      <Text fontType="body1">답변 {commentCount}</Text>
      <form onSubmit={createQnaCommentSubmit(onCreateQnaCommentSubmit)}>
        <Textarea minHeight="200px" {...register('content', { required: true })} />
        <Flex justify="flex-end" style={{ marginBottom: '10px' }}>
          <Button type="submit" size="small" width="70px" style={{ marginTop: '10px' }}>
            등록
          </Button>
        </Flex>
      </form>
      {qnaComment?.map((comment) => (
        <>
          <Stack
            key={comment?.id}
            style={{
              borderTop: `1px solid ${colors.gray300}`,
              paddingTop: '10px',
            }}
            justify="space-between"
            direction="horizontal"
            spacing={10}
          >
            <Flex align="center">
              <Text fontType="p2">
                {comment.userResponse?.name}
                <Text fontType="p3" style={{ marginLeft: '3px' }}>
                  ({comment.userResponse?.email})
                </Text>
              </Text>
              <Text fontType="p3" color="gray500" style={{ marginLeft: '8px' }}>
                {5}일 전
              </Text>
            </Flex>
            <StyledSettingButtonContainer>
              {user.id === comment.userResponse.id && (
                <StyledSettingButton
                  onClick={() => toggleQnaCommentEditModal(comment.id)}
                />
              )}
              {isOpenQnaCommentEditModal.includes(comment.id) && (
                <QnaCommentModifyBox id={comment.id} />
              )}
            </StyledSettingButtonContainer>
          </Stack>
          <Text fontType="p2">{comment?.content}</Text>
        </>
      ))}
    </StyledQnaComment>
  );
};

export default QnaComment;

const StyledQnaComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;

const StyledSettingButtonContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledSettingButton = styled(IconSettingFill)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

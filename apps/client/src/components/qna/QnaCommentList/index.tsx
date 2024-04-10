import styled from '@emotion/styled';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import {
  CreateQnaCommentRequest,
  useCreateQnaComment,
} from '@/hooks/api/qna/useCreateComment';
import QnaCommentBox from '../QnaCommentBox';
import { useGetQnaCommentList } from '@/hooks/api/qna/useGetQnaCommentList';

type QnaCommentListProps = {
  commentCount: number;
};

const QnaComment = ({ commentCount }: QnaCommentListProps) => {
  const { id } = useParams();
  const { qnaCommentList } = useGetQnaCommentList(Number(id));
  const { mutate: qnaCommentMutate } = useCreateQnaComment(Number(id));

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
      {qnaCommentList?.map((comment) => <QnaCommentBox {...comment} />)}
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

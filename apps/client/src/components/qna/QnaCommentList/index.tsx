import styled from '@emotion/styled';
import { IconReplyMissionRegular } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { useParams } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import QnaCommentBox from '../QnaCommentBox';
import type { CreateQnaCommentRequest } from '@/hooks/api/qna/useCreateComment';
import { useCreateQnaComment } from '@/hooks/api/qna/useCreateComment';
import { useGetQnaCommentList } from '@/hooks/api/qna/useGetQnaCommentList';

type QnaCommentListProps = {
  commentCount: number;
};

const QnaComment = ({ commentCount }: QnaCommentListProps) => {
  const { id } = useParams();
  const { qnaCommentList, isLoading } = useGetQnaCommentList(Number(id));
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
      <Text fontType="body1" style={{ marginBottom: '5px' }}>
        답변 {commentCount}
      </Text>
      <form onSubmit={createQnaCommentSubmit(onCreateQnaCommentSubmit)}>
        <Textarea minHeight="150px" {...register('content', { required: true })} />
        <Flex justify="flex-end" style={{ marginBottom: '10px' }}>
          <Button type="submit" size="small" width="70px" style={{ marginTop: '10px' }}>
            등록
          </Button>
        </Flex>
      </form>
      {isLoading ? (
        <StyledQnaCommentSkeletonBox />
      ) : qnaCommentList?.length > 0 ? (
        qnaCommentList.map((comment) => <QnaCommentBox key={comment.id} {...comment} />)
      ) : (
        <StyledNoQnaCommentContainer>
          <IconReplyMissionRegular color={colors.gray600} width={28} />
          <Text color={'gray600'}>등록된 댓글이 없어요..</Text>
        </StyledNoQnaCommentContainer>
      )}
    </StyledQnaComment>
  );
};

export default QnaComment;

const StyledQnaComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const StyledQnaCommentSkeletonBox = styled.div`
  height: 96px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 10px;
`;

const StyledNoQnaCommentContainer = styled.div`
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;

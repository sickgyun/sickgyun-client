import { Button, Flex, Textarea } from '@sickgyun/ui';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';
import { useParams } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateQnaComment } from '@/hooks/api/qna/useCreateComment';
import type { CreateQnaCommentRequest } from '@/hooks/api/qna/useCreateComment';
import type { GetQnaCommentListResponse } from '@/hooks/api/qna/useGetQnaCommentList';

type createQnaRecommentBoxProps = {
  parentId: number;
  setIsOpenRecommentBox: Dispatch<SetStateAction<boolean>>;
} & GetQnaCommentListResponse;

const CreateQnaRecommentBox = ({
  setIsOpenRecommentBox,
  parentId,
}: createQnaRecommentBoxProps) => {
  const { id } = useParams();
  const { mutate: qnaCommentMutate } = useCreateQnaComment(Number(id));

  const { register, handleSubmit: createQnaRecommentSubmit } =
    useForm<CreateQnaCommentRequest>();

  const onCreateQnaReCommentSubmit: SubmitHandler<CreateQnaCommentRequest> = (data) => {
    const reCommentData = {
      ...data,
      parentId,
    };

    qnaCommentMutate(reCommentData);
    setIsOpenRecommentBox(false);
  };

  const handleCloseQnaRecommentCreateBox = () => {
    setIsOpenRecommentBox(false);
  };

  return (
    <form onSubmit={createQnaRecommentSubmit(onCreateQnaReCommentSubmit)}>
      <Textarea minHeight="120px" {...register('content', { required: true })} />
      <Flex
        align="center"
        justify="flex-end"
        style={{ marginTop: '7px', marginBottom: '8px' }}
      >
        <SecondaryButton
          size="small"
          width="70px"
          style={{ height: '38px', marginRight: '5px' }}
          onClick={handleCloseQnaRecommentCreateBox}
        >
          취소
        </SecondaryButton>
        <Button type="submit" size="small" width="70px" style={{ height: '38px' }}>
          등록
        </Button>
      </Flex>
    </form>
  );
};

export default CreateQnaRecommentBox;

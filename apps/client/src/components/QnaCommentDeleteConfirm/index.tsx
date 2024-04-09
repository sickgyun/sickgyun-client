import { useDeleteQnaComment } from '@/hooks/api/qna/useDeleteQnaComment';
import { Confirm } from '@sickgyun/ui';

type QnaCommentDeleteConfirmProps = {
  id: number;
} & ModalProps;

const QnaCommentDeleteConfirm = ({
  isOpen,
  onClose,
  id,
}: QnaCommentDeleteConfirmProps) => {
  const { mutate: qnaCommentDeleteMutate } = useDeleteQnaComment(id);

  const handleQnaCommentDelete = () => {
    qnaCommentDeleteMutate();
    onClose();
  };

  return (
    <Confirm
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleQnaCommentDelete}
      title="댓글 삭제"
      description="정말 댓글을 삭제 하시겠습니까?"
      confirmButtonText="삭제"
    />
  );
};

export default QnaCommentDeleteConfirm;

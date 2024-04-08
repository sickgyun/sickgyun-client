import { Confirm } from '@sickgyun/ui';
import { useDeleteQna } from '@/hooks/api/qna/useDeleteQna';

type QnaDeleteConfirmProps = {
  id: number;
} & ModalProps;
const QnaDeleteConfirm = ({ isOpen, onClose, id }: QnaDeleteConfirmProps) => {
  const { mutate: qnaDeleteMutate } = useDeleteQna(id);

  const handleQnaDelete = () => {
    qnaDeleteMutate();
    onClose();
  };

  return (
    <Confirm
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleQnaDelete}
      title="게시글 삭제"
      description="정말 게시글을 삭제 하시겠습니까?"
      confirmButtonText="삭제"
    />
  );
};

export default QnaDeleteConfirm;

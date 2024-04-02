import { Confirm } from '@sickgyun/ui';
import { useCancelCoffeechat } from '@/hooks/api/coffeechat/useCancelCoffeechat';

type CoffeechatCancelConfirmProps = {
  userId: number;
} & ModalProps;

const CoffeechatCancelConfirm = ({
  isOpen,
  onClose,
  userId,
}: CoffeechatCancelConfirmProps) => {
  const { mutate: cancelCoffeechatMutate } = useCancelCoffeechat(userId);

  const handleConfirm = () => {
    onClose();
    cancelCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 취소"
      description="정말 커피챗을 취소하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default CoffeechatCancelConfirm;

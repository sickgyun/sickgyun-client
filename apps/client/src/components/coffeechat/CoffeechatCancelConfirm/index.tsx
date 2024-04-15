import { Confirm } from '@sickgyun/ui';
import { useCancelCoffeechat } from '@/hooks/api/coffeechat/useCancelCoffeechat';

type CoffeechatCancelConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatCancelConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatCancelConfirmProps) => {
  const { mutate: cancelCoffeechatMutate } = useCancelCoffeechat(coffeechatId);

  const handleConfirm = () => {
    onClose();
    cancelCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 신청 취소"
      description="정말 커피챗 신청을 취소하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default CoffeechatCancelConfirm;

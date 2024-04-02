import { Confirm } from '@sickgyun/ui';
import { useAcceptCoffeechat } from '@/hooks/api/coffeechat/useAcceptCoffeechat';

type CoffeechatAcceptConfirmProps = {
  userId: number;
} & ModalProps;

const CoffeechatAcceptConfirm = ({
  isOpen,
  onClose,
  userId,
}: CoffeechatAcceptConfirmProps) => {
  const { mutate: acceptCoffechatMutate } = useAcceptCoffeechat(userId);

  const handleConfirm = () => {
    onClose();
    acceptCoffechatMutate();
  };

  return (
    <Confirm
      title="커피챗 수락"
      description="수락하면 상대방이 보낸 메세지를 확인할 수 있어요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default CoffeechatAcceptConfirm;

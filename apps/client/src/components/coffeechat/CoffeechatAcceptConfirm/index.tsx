import { Confirm } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatRequestUserModal from '../CoffeechatRequestUserModal';
import { useAcceptCoffeechat } from '@/hooks/api/coffeechat/useAcceptCoffeechat';
import type { Contact } from '@/types/coffeechat';

type CoffeechatAcceptConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatAcceptConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatAcceptConfirmProps) => {
  const overlay = useOverlay();

  const openCoffeechatRequestUserModal = ({
    message,
    contact,
  }: {
    message: string;
    contact: Contact;
  }) => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatRequestUserModal
        isOpen={isOpen}
        onClose={close}
        message={message}
        contact={contact}
      />
    ));
  };

  const { mutate: acceptCoffeechatMutate } = useAcceptCoffeechat({
    coffeechatId,
    openCoffeechatRequestUserModal,
  });

  const handleConfirm = () => {
    onClose();
    acceptCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 수락"
      description="수락하면 상대방이 보낸 메세지와 연락처를 확인할 수 있어요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default CoffeechatAcceptConfirm;

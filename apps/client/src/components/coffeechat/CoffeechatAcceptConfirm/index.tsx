import { Confirm } from '@sickgyun/ui';

type CoffeechatAcceptConfirmProps = ModalProps;

const CoffeechatAcceptConfirm = ({ isOpen, onClose }: CoffeechatAcceptConfirmProps) => {
  return (
    <Confirm
      title="커피챗 수락"
      description="수락하면 상대방이 보낸 메세지를 확인할 수 있어요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => console.log('확인')}
    />
  );
};

export default CoffeechatAcceptConfirm;

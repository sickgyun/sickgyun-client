import { Confirm } from '@sickgyun/ui';

type CoffeechatCancelConfirmProps = ModalProps;

const CoffeechatCancelConfirm = ({ isOpen, onClose }: CoffeechatCancelConfirmProps) => {
  return (
    <Confirm
      title="커피챗 취소"
      description="정말 커피챗을 취소하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => console.log('확인')}
    />
  );
};

export default CoffeechatCancelConfirm;

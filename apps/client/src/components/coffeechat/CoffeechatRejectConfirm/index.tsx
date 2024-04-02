import { Confirm, Textarea } from '@sickgyun/ui';

type CoffeechatRejectConfirmProps = ModalProps;

const CoffeechatRejectConfirm = ({ isOpen, onClose }: CoffeechatRejectConfirmProps) => {
  return (
    <Confirm
      title="커피챗 거절"
      description="정말 커피챗을 거절하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => console.log('asd')}
    >
      <Textarea label="거절 사유" placeholder="거절 사유를 입력해주세요." />
    </Confirm>
  );
};

export default CoffeechatRejectConfirm;

import { Confirm, Textarea } from '@sickgyun/ui';

type CoffechatSendConfirmProps = ModalProps;

const CoffechatSendConfirm = ({ isOpen, onClose }: CoffechatSendConfirmProps) => {
  return (
    <Confirm
      title="커피챗 요청"
      description="메세지를 입력해서 커피챗을 신청해보세요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onClose}
    >
      <Textarea label="메세지" placeholder="메세지를 입력해주세요." />
    </Confirm>
  );
};

export default CoffechatSendConfirm;

import { Confirm, Textarea } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  type RejectCoffeechatRequest,
  useRejectCoffeechat,
} from '@/hooks/api/coffeechat/useRejectCoffeechat';

type CoffeechatRejectConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatRejectConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatRejectConfirmProps) => {
  const { register, handleSubmit: handleRejectCoffeechatSubmit } = useForm();
  const { mutate: rejectCoffeechatMutate } = useRejectCoffeechat(coffeechatId);

  const onRejectCoffeechat: SubmitHandler<RejectCoffeechatRequest> = (data) => {
    rejectCoffeechatMutate(data);
    onClose();
  };

  return (
    <Confirm
      title="커피챗 거절"
      description="정말 커피챗을 거절하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleRejectCoffeechatSubmit(onRejectCoffeechat)}
    >
      <Textarea
        label="거절 사유"
        placeholder="거절 사유를 입력해주세요."
        {...register('message')}
      />
    </Confirm>
  );
};

export default CoffeechatRejectConfirm;

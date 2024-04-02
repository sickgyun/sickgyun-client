import { Confirm, Textarea } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateCoffeechat } from '@/hooks/api/coffeechat/useCreateCoffeechat';
import type { CreateCoffeechatRequest } from '@/hooks/api/coffeechat/useCreateCoffeechat';
import { useUser } from '@/hooks/common/useUser';

type CoffeechatSendConfirmProps = {
  onProfileDetailModalClose: VoidFunction;
} & ModalProps;

const CoffeechatSendConfirm = ({
  isOpen,
  onClose,
  onProfileDetailModalClose,
}: CoffeechatSendConfirmProps) => {
  const user = useUser();
  const { register, handleSubmit: handleCreateCoffeechatSubmit } =
    useForm<CreateCoffeechatRequest>();
  const { mutate: createCoffeechat } = useCreateCoffeechat(user.id);

  const onCreateCoffeechat: SubmitHandler<CreateCoffeechatRequest> = (data) => {
    createCoffeechat(data);
    onClose();
    onProfileDetailModalClose();
  };

  return (
    <Confirm
      title="커피챗 요청"
      description="메세지를 입력해서 커피챗을 신청해보세요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleCreateCoffeechatSubmit(onCreateCoffeechat)}
    >
      <Textarea
        label="메세지"
        placeholder="메세지를 입력해주세요."
        {...register('message')}
      />
    </Confirm>
  );
};

export default CoffeechatSendConfirm;

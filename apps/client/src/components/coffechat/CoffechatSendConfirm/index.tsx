import { Confirm, Textarea } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { CreateCoffechatRequest } from '@/hooks/api/coffechat/useCreateConffechat';
import { useCreateCoffechat } from '@/hooks/api/coffechat/useCreateConffechat';
import { useUser } from '@/hooks/common/useUser';

type CoffechatSendConfirmProps = ModalProps;

const CoffechatSendConfirm = ({ isOpen, onClose }: CoffechatSendConfirmProps) => {
  const user = useUser();
  const { register, handleSubmit: handleCreateCoffechatSubmit } =
    useForm<CreateCoffechatRequest>();
  const { mutate: createCoffechat } = useCreateCoffechat(user.id);

  const onCreateCoffechat: SubmitHandler<CreateCoffechatRequest> = (data) => {
    createCoffechat(data);
  };

  return (
    <Confirm
      title="커피챗 요청"
      description="메세지를 입력해서 커피챗을 신청해보세요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleCreateCoffechatSubmit(onCreateCoffechat)}
    >
      <Textarea
        label="메세지"
        placeholder="메세지를 입력해주세요."
        {...register('message')}
      />
    </Confirm>
  );
};

export default CoffechatSendConfirm;

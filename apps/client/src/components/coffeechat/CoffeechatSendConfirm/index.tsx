import styled from '@emotion/styled';
import { Confirm, Textarea } from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateCoffeechat } from '@/hooks/api/coffeechat/useCreateCoffeechat';
import type { CreateCoffeechatRequest } from '@/hooks/api/coffeechat/useCreateCoffeechat';

type CoffeechatSendConfirmProps = {
  onProfileDetailModalClose: VoidFunction;
  userId: number;
} & ModalProps;

const CoffeechatSendConfirm = ({
  isOpen,
  onClose,
  onProfileDetailModalClose,
  userId,
}: CoffeechatSendConfirmProps) => {
  const { register, handleSubmit: handleCreateCoffeechatSubmit } =
    useForm<CreateCoffeechatRequest>();
  const { mutate: createCoffeechatMutate } = useCreateCoffeechat(userId);

  const onCreateCoffeechat: SubmitHandler<CreateCoffeechatRequest> = (data) => {
    createCoffeechatMutate(data);
    onClose();
    onProfileDetailModalClose();
  };

  return (
    <StyledCoffeechatSendConfirm
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
    </StyledCoffeechatSendConfirm>
  );
};

export default CoffeechatSendConfirm;

const StyledCoffeechatSendConfirm = styled(Confirm)`
  width: 500px;
`;

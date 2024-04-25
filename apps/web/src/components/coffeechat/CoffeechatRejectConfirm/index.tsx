import { Confirm, Textarea } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { RECEIVE_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import {
  type RejectCoffeechatRequest,
  useRejectCoffeechat,
} from '@/hooks/api/coffeechat/useRejectCoffeechat';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import { useLogAnalyticsEvent } from '@/libs/logging';
import { useToast } from '@/libs/toast';

type CoffeechatRejectConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatRejectConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatRejectConfirmProps) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { logClickEvent } = useLogAnalyticsEvent();
  const { register, handleSubmit: handleRejectCoffeechatSubmit } = useForm();
  const { mutate: rejectCoffeechatMutate } = useRejectCoffeechat(coffeechatId, {
    onSuccess: () => {
      logClickEvent({ name: 'click_reject_coffeechat' });
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      toast.info('커피챗 신청을 거절했어요.');
    },
  });

  const onRejectCoffeechat: SubmitHandler<RejectCoffeechatRequest> = (data) => {
    rejectCoffeechatMutate(data);
    onClose();
  };

  return (
    <Confirm
      title="커피챗 거절"
      description="정말 커피챗을 거절하시겠어요?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleRejectCoffeechatSubmit(onRejectCoffeechat)}
      confirmButtonText="거절하기"
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

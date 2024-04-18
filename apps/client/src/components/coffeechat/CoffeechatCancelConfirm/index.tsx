import { Confirm } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useCancelCoffeechat } from '@/hooks/api/coffeechat/useCancelCoffeechat';
import { RECEIVE_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { SEND_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';
import { useLogAnalyticsEvent } from '@/libs/logging';
import { useToast } from '@/libs/toast';

type CoffeechatCancelConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatCancelConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatCancelConfirmProps) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { logClickEvent } = useLogAnalyticsEvent();

  const { mutate: cancelCoffeechatMutate } = useCancelCoffeechat(coffeechatId, {
    onSuccess: () => {
      logClickEvent({ name: 'click_cancel_coffeechat' });
      queryClient.invalidateQueries({ queryKey: [SEND_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      toast('커피챗 요청을 취소했어요!');
    },
  });

  const handleConfirm = () => {
    onClose();
    cancelCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 신청 취소"
      description="정말 커피챗 신청을 취소하시겠습니까?"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default CoffeechatCancelConfirm;

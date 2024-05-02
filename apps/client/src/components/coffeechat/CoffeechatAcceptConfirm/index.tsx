import { Confirm } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useAcceptCoffeechat } from '@/hooks/api/coffeechat/useAcceptCoffeechat';
import { RECEIVE_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import { useShowConfetti } from '@/hooks/common/useShowConfetti';
import { useLogAnalyticsEvent } from '@/libs/logging';

type CoffeechatAcceptConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatAcceptConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatAcceptConfirmProps) => {
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();
  const { showConfetti } = useShowConfetti();
  const { mutate: acceptCoffeechatMutate } = useAcceptCoffeechat(coffeechatId, {
    onSuccess: () => {
      logClickEvent({
        name: 'click_accept_coffeechat',
        params: {
          coffeechatId,
        },
      });
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      showConfetti();
    },
  });

  const handleConfirm = () => {
    onClose();
    acceptCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 수락"
      description="수락하면 상대방의 연락처를 확인할 수 있어요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      confirmButtonText="수락하기"
    />
  );
};

export default CoffeechatAcceptConfirm;

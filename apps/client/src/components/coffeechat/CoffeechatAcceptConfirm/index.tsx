import { Confirm } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatContactMessageModal from '../CoffeechatContactMessageModal';
import { useAcceptCoffeechat } from '@/hooks/api/coffeechat/useAcceptCoffeechat';
import { RECEIVE_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import { useLogAnalyticsEvent } from '@/hooks/common/useLogAnalyticsEvent';
import type { Contact } from '@/types/coffeechat';

type CoffeechatAcceptConfirmProps = {
  coffeechatId: number;
} & ModalProps;

const CoffeechatAcceptConfirm = ({
  isOpen,
  onClose,
  coffeechatId,
}: CoffeechatAcceptConfirmProps) => {
  const overlay = useOverlay();
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();

  const openCoffeechatContactMessageModal = (message: string, contact: Contact) => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactMessageModal
        isOpen={isOpen}
        onClose={close}
        message={message}
        contact={contact}
      />
    ));
  };

  const { mutate: acceptCoffeechatMutate } = useAcceptCoffeechat(coffeechatId, {
    onSuccess: (response) => {
      logClickEvent({ name: 'click_accept_coffeechat' });
      queryClient.invalidateQueries({ queryKey: [RECEIVE_COFFEE_CHAT_LIST] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      openCoffeechatContactMessageModal(response.message, response.contact);
    },
  });

  const handleConfirm = () => {
    onClose();
    acceptCoffeechatMutate();
  };

  return (
    <Confirm
      title="커피챗 수락"
      description="수락하면 상대방이 보낸 메세지와 연락처를 확인할 수 있어요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      confirmButtonText="수락하기"
    />
  );
};

export default CoffeechatAcceptConfirm;

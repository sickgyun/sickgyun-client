import styled from '@emotion/styled';
import { Confirm, Textarea } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { SEND_COFFEE_CHAT_LIST } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';
import { useSendCoffeechat } from '@/hooks/api/coffeechat/useSendCoffeechat';
import type { SendCoffeechatRequest } from '@/hooks/api/coffeechat/useSendCoffeechat';
import { useLogAnalyticsEvent } from '@/libs/logging';
import { useToast } from '@/libs/toast';

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
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { logClickEvent } = useLogAnalyticsEvent();
  const {
    register,
    handleSubmit: handleCreateCoffeechatSubmit,
    watch,
  } = useForm<SendCoffeechatRequest>();
  const { mutate: sendCoffeechatMutate } = useSendCoffeechat(userId, {
    onSuccess: () => {
      logClickEvent({ name: 'click_send_coffeechat', params: watch() });
      queryClient.invalidateQueries({ queryKey: [SEND_COFFEE_CHAT_LIST] });
      router.replace('/profile');
      toast.info('커피챗 요청을 보냈어요!', {
        action: {
          label: '확인하러 가기',
          onClick: () => router.push('/notification?type=SEND'),
        },
      });
    },
    onError: () => {
      toast.error('이미 커피챗을 요청한 상태에요!');
    },
  });

  const onSendCoffeechat: SubmitHandler<SendCoffeechatRequest> = (data) => {
    sendCoffeechatMutate(data);
    onClose();
    onProfileDetailModalClose();
  };

  return (
    <StyledCoffeechatSendConfirm
      title="커피챗 요청"
      description="메세지를 입력해서 커피챗을 신청해보세요!"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleCreateCoffeechatSubmit(onSendCoffeechat)}
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

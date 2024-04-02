import { useMutation } from '@tanstack/react-query';
import { del } from '@/libs/api/client';

export const useCancelCoffeechat = (userId: number) => {
  return useMutation({
    mutationFn: () => del(`/api/coffeechat/${userId}`),
    onSuccess: () => {
      alert('커피챗 요청이 취소되었어요.');
    },
  });
};

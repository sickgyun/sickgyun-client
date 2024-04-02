import { useMutation } from '@tanstack/react-query';
import { put } from '@/libs/api/client';

export type RejectCoffeechatRequest = {
  message?: string;
};

export const useRejectCoffeechat = (userId: number) => {
  return useMutation({
    mutationFn: (data: RejectCoffeechatRequest) =>
      put(`/api/coffeechat/${userId}/reject`, data),
    onSuccess: () => {
      alert('커피챗 응답이 거절되었어요.');
    },
  });
};

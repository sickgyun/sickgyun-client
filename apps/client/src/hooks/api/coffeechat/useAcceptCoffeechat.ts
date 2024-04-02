import { useMutation } from '@tanstack/react-query';
import { put } from '@/libs/api/client';

export const useAcceptCoffeechat = (userId: number) => {
  return useMutation({
    mutationFn: () => put(`/api/coffeechat/${userId}/accept`),
    onSuccess: () => {
      alert('커피챗 응답이 수락되었어요!');
    },
  });
};

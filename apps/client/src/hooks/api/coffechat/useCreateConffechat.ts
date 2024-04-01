import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

export type CreateCoffechatRequest = {
  message?: string;
};

export const useCreateCoffechat = (userId: number) => {
  return useMutation<unknown, unknown, CreateCoffechatRequest>({
    mutationFn: (data: CreateCoffechatRequest) => post(`/api/coffee/${userId}`, data),
    onSuccess: () => {
      alert('커피챗 요청이 보내졌어요!');
    },
  });
};

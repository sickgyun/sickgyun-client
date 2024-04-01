import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';

export type CreateCoffechatRequest = {
  message?: string;
};

export const useCreateCoffechat = (userId: number) => {
  const router = useRouter();

  return useMutation<unknown, unknown, CreateCoffechatRequest>({
    mutationFn: (data: CreateCoffechatRequest) => post(`/api/coffeechat/${userId}`, data),
    onSuccess: () => {
      alert('커피챗 요청이 보내졌어요!');
      router.replace('/profile?major=all');
    },
  });
};

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';

export type CreateCoffeechatRequest = {
  message?: string;
};

export const useCreateCoffeechat = (userId: number) => {
  const router = useRouter();

  return useMutation<unknown, unknown, CreateCoffeechatRequest>({
    mutationFn: (data: CreateCoffeechatRequest) =>
      post(`/api/coffeechat/${userId}`, data),
    onSuccess: () => {
      alert('커피챗 요청이 보내졌어요!');
      router.replace('/profile');
    },
  });
};

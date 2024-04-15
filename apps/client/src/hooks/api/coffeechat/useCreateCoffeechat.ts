import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type CreateCoffeechatRequest = {
  message?: string;
};

export const useCreateCoffeechat = (userId: number) => {
  const router = useRouter();

  return useMutation<unknown, AxiosError<ApiErrorScheme>, CreateCoffeechatRequest>({
    mutationFn: (data: CreateCoffeechatRequest) => post(`/coffeechat/${userId}`, data),
    onSuccess: () => {
      router.replace('/profile');
      alert('커피챗 요청을 보냈어요!');
    },
    onError: () => {
      alert('이미 커피챗을 요청한 상태에요!');
    },
  });
};

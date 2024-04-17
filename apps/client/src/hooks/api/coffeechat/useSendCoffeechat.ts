import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type SendCoffeechatRequest = {
  message?: string;
};

export const useSendCoffeechat = (
  userId: number,
  options: UseMutationOptions<unknown, AxiosError<ApiErrorScheme>, SendCoffeechatRequest>
) => {
  return useMutation({
    mutationFn: (data: SendCoffeechatRequest) => post(`/coffeechat/${userId}`, data),
    ...options,
  });
};

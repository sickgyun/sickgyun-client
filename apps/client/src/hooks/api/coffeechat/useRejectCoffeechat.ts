import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export type RejectCoffeechatRequest = {
  message: string;
};

export const useRejectCoffeechat = (
  coffeechatId: number,
  options: UseMutationOptions<
    unknown,
    AxiosError<ApiErrorScheme>,
    RejectCoffeechatRequest
  >
) => {
  return useMutation({
    mutationFn: (data) => put(`/coffeechat/${coffeechatId}/reject`, data),
    ...options,
  });
};

import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { del } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export const useCancelCoffeechat = (
  coffeechatId: number,
  options: UseMutationOptions<unknown, AxiosError<ApiErrorScheme>>
) => {
  return useMutation({
    mutationFn: () => del(`/coffeechat/${coffeechatId}`),
    ...options,
  });
};

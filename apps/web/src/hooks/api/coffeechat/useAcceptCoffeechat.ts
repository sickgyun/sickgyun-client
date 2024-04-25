import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { Contact } from '@/types/coffeechat';

type AcceptCoffeechatResponse = {
  message?: string;
  contact?: Contact;
};

export const useAcceptCoffeechat = (
  coffeechatId: number,
  options: UseMutationOptions<AcceptCoffeechatResponse, AxiosError<ApiErrorScheme>>
) => {
  return useMutation({
    mutationFn: () => put(`/coffeechat/${coffeechatId}/accept`),
    ...options,
  });
};

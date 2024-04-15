import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import type { Contact } from '@/types/coffeechat';

export type UpdateUserContactRequest = Contact;

export const useUpdateUserContact = (
  options: UseMutationOptions<unknown, AxiosError, UpdateUserContactRequest>
) => {
  return useMutation({
    mutationFn: (data) => put('/user/contact', data),
    ...options,
  });
};

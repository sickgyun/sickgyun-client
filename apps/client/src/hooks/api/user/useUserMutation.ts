import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { put } from '@/libs/api/client';

type UserMutationRequest = {
  name: string;
  email: string;
};

export const useUserMutation = (
  options?: UseMutationOptions<unknown, AxiosError, UserMutationRequest>
) => {
  return useMutation({
    mutationFn: ({ name, email }: UserMutationRequest) =>
      put('/api/user', { name, email }),
    onSuccess: () => {
      alert('프로필 업데이트 성공');
    },
    onError: () => {
      alert('프로필 업데이트 실패');
    },
    ...options,
  });
};

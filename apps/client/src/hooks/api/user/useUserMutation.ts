import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { USER_INFORMATION_QUERY_KEY } from './useGetUserInformation';
import { put } from '@/libs/api/client';

type UserMutationRequest = {
  name: string;
  email: string;
};

type UserMutationResponse = {
  status: number;
};

export const useUserMutation = (
  options?: UseMutationOptions<UserMutationResponse, AxiosError, UserMutationRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, email }: UserMutationRequest) => {
      return put<UserMutationResponse>('/api/user', { name, email });
    },
    onSuccess: () => {
      alert('프로필 업데이트 성공');
      queryClient.invalidateQueries({ queryKey: [USER_INFORMATION_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 업데이트 실패');
    },
    ...options,
  });
};

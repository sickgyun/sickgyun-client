import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { ProfileFormType } from '@/types/profile';

export type UpdateProfileRequest = ProfileFormType;

export const useUpdateProfile = (
  options: UseMutationOptions<unknown, AxiosError<ApiErrorScheme>, UpdateProfileRequest>
) => {
  return useMutation({
    mutationFn: (data) => put('/profiles', data),
    ...options,
  });
};

import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { ProfileFormType } from '@/types/profile';

export type CreateProfileRequest = ProfileFormType;

export const useCreateProfile = (
  options: UseMutationOptions<unknown, AxiosError<ApiErrorScheme>, CreateProfileRequest>
) => {
  return useMutation({
    mutationFn: (data: CreateProfileRequest) => post('/profiles', data),
    ...options,
  });
};

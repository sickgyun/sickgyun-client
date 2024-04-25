import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

type LoginGoogleRequest = {
  accessToken: string;
};

type LoginGoogleResponse = {
  accessToken: string;
  refreshToken: string;
};

export const GOOGLE_LOGIN_MUTATION_KEY = 'googleLogin';

export const useLoginGoogle = (
  options: UseMutationOptions<
    LoginGoogleResponse,
    AxiosError<ApiErrorScheme>,
    LoginGoogleRequest
  >
) => {
  return useMutation({
    mutationKey: [GOOGLE_LOGIN_MUTATION_KEY],
    mutationFn: (data) => post('/auth/login', data),
    ...options,
  });
};

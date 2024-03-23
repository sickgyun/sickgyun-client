import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';

type GoogleLoginMutationRequest = {
  accessToken: string;
};

type GoogleLoginMutationResponse = {
  accessToken: string;
  refreshToken: string;
};

export const GOOGLE_LOGIN_MUTATION_KEY = 'googleLogin';

export const useGoogleLoginMutation = (
  options?: UseMutationOptions<
    GoogleLoginMutationResponse,
    AxiosError,
    GoogleLoginMutationRequest
  >
) => {
  return useMutation({
    mutationKey: [GOOGLE_LOGIN_MUTATION_KEY],
    mutationFn: ({ accessToken }: GoogleLoginMutationRequest) => {
      return post<GoogleLoginMutationResponse>('/api/auth/login', { accessToken });
    },
    ...options,
  });
};

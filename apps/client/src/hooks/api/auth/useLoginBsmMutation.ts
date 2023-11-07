import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

type LoginBsmMutationResponse = {
  message: string;
  data: {
    accessToken: string;
  };
};

type LoginBsmMutationParams = {
  authCode: string;
};

export const useLoginBsmMutation = () => {
  return useMutation<
    LoginBsmMutationResponse,
    { message?: string },
    LoginBsmMutationParams
  >({
    mutationFn: ({ authCode }: LoginBsmMutationParams) =>
      post<LoginBsmMutationResponse>(`/auth?code=${authCode}`),
  });
};

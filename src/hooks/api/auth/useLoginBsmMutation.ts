import { post } from '@/libs/api/client';
import { useMutation } from '@tanstack/react-query';

type LoginBsmMutationResponse = {
  message: string;
  data: {
    accessToken: string;
    isGraduate: 'STUDENT' | 'GRADUATE';
  };
};

type LoginBsmMutationParams = {
  authCode: string;
};

type UseLoginBsmMutationProps = {
  onSuccess?: (
    data: LoginBsmMutationResponse,
    variables: LoginBsmMutationParams,
    context: unknown
  ) => void | Promise<unknown>;
  onError?: (
    data: { message?: string },
    variables: LoginBsmMutationParams,
    context: unknown
  ) => void | Promise<unknown>;
};

export const useLoginBsmMutation = ({ onSuccess, onError }: UseLoginBsmMutationProps) => {
  return useMutation<LoginBsmMutationResponse, { message?: string }, LoginBsmMutationParams>({
    mutationFn: ({ authCode }: LoginBsmMutationParams) =>
      post<LoginBsmMutationResponse>(`/auth?code=${authCode}`),
    onSuccess,
    onError,
  });
};

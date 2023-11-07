import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
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
  const router = useRouter();

  return useMutation<
    LoginBsmMutationResponse,
    { message?: string },
    LoginBsmMutationParams
  >({
    mutationFn: ({ authCode }: LoginBsmMutationParams) =>
      post<LoginBsmMutationResponse>(`/auth?code=${authCode}`),
    onSuccess: (data: LoginBsmMutationResponse) => {
      localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, data.data.accessToken);
      router.replace('/');
    },
    onError: () => {
      alert('로그인 도중 오류가 발생하였습니다. 다시 한번 시도해주세요.');
      router.replace('/');
    },
  });
};

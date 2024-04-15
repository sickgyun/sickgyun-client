import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { post } from '@/libs/api/client';
import { Storage } from '@/libs/api/storage';
import type { ApiErrorScheme } from '@/libs/exceptions';

type LoginGoogleRequest = {
  accessToken: string;
};

type LoginGoogleResponse = {
  accessToken: string;
  refreshToken: string;
};

export const GOOGLE_LOGIN_MUTATION_KEY = 'googleLogin';

export const useLoginGoogle = () => {
  const router = useRouter();

  return useMutation<LoginGoogleResponse, AxiosError<ApiErrorScheme>, LoginGoogleRequest>(
    {
      mutationKey: [GOOGLE_LOGIN_MUTATION_KEY],
      mutationFn: (data) => post('/auth/login', data),
      onSuccess: (data) => {
        const { accessToken, refreshToken } = data;

        Storage.setItem(LOCAL_STORAGE_KEY.accessToken, `Bearer ${accessToken}`);
        Storage.setItem(LOCAL_STORAGE_KEY.refreshToken, `Bearer ${refreshToken}`);

        router.replace('/');
      },
      onError: () => {
        alert('학교 계정으로 로그인 해주세요.');
        router.replace('/');
      },
    }
  );
};

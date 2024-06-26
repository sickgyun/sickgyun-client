import axios, { isAxiosError } from 'axios';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiException, CustomException, errorMessage } from '../exceptions';
import { LocalStorage } from './storage';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import type { ApiErrorScheme } from '@/libs/exceptions';

type AuthRefreshResponse = {
  accessToken: string;
  refreshToken: string;
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
});

const interceptorRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  if (typeof window === 'undefined') {
    return config;
  }

  if (!config.headers) {
    return config;
  }

  const accessToken = LocalStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  if (!accessToken) {
    return config;
  }

  config.headers.Authorization = accessToken;

  return config;
};

instance.interceptors.request.use(interceptorRequestFulfilled);

const interceptorResponseFulfilled = (response: AxiosResponse) => {
  if (200 <= response.status && response.status < 300) {
    return response.data;
  }

  return Promise.reject(response.data);
};

const interceptorResponseRejected = async (error: AxiosError<ApiErrorScheme>) => {
  if (isAxiosError(error)) {
    if (
      error.response?.data?.status === 403 &&
      error.response?.data?.message === '토큰이 만료되었습니다.'
    ) {
      try {
        const response = await post<AuthRefreshResponse>('/auth/refresh', {
          refreshToken: LocalStorage.getItem(LOCAL_STORAGE_KEY.refreshToken),
        });

        LocalStorage.setItem(
          LOCAL_STORAGE_KEY.accessToken,
          `Bearer ${response.accessToken}`
        );
        LocalStorage.setItem(
          LOCAL_STORAGE_KEY.refreshToken,
          `Bearer ${response.refreshToken}`
        );

        error.config.headers.Authorization = LocalStorage.getItem('siac');

        return instance.request(error.config);
      } catch {
        localStorage.clear();
        window.location.replace('/');
      }
    }
  }

  if (error.response?.data?.['message']) {
    return Promise.reject(new ApiException(error.response.data, error.response.status));
  }

  if (error.message.startsWith('timeout')) {
    return Promise.reject(new CustomException(errorMessage.TIMEOUT, 'NETWORK_TIMEOUT'));
  }

  return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'));
};

instance.interceptors.response.use(
  interceptorResponseFulfilled,
  interceptorResponseRejected
);

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, T>(...args);
};

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, T>(...args);
};

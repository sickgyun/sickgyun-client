import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { post } from '@/libs/api/client';

export type UploadImageRequest = FormData;

export type UploadImageResponse = {
  url: string;
};

export const useUploadImage = (
  options: UseMutationOptions<UploadImageResponse, AxiosError, UploadImageRequest>
) => {
  return useMutation({
    mutationFn: (data: UploadImageRequest) =>
      post('/image', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    ...options,
  });
};

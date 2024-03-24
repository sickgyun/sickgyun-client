import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

export type CreateProfileRequest = {
  major: string;
  isRecruited: boolean;
  githubId?: string;
  company?: string;
  imageUrl?: string;
  introduction?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
};

export type CreatProfileResponse = {
  message: string;
};

export const useCreateProfile = () => {
  return useMutation<CreatProfileResponse, { message?: string }, CreateProfileRequest>({
    mutationFn: (data: CreateProfileRequest) =>
      post<CreatProfileResponse>('/api/profiles', data),
    onSuccess: () => {
      alert('프로필 등록 성공');
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

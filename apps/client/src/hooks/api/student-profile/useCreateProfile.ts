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

export const useCreateProfile = () => {
  return useMutation<unknown, unknown, CreateProfileRequest>({
    mutationFn: (data: CreateProfileRequest) => post('/api/profiles', data),
    onSuccess: () => {
      alert('프로필 등록 성공');
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

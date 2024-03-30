import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
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
  const queryClinet = useQueryClient();

  return useMutation<unknown, unknown, CreateProfileRequest>({
    mutationFn: (data: CreateProfileRequest) => post('/api/profiles', data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};
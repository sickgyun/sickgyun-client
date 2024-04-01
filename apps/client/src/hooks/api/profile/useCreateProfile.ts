import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { post } from '@/libs/api/client';
import type { ProfileForm } from '@/types/profile';

export type CreateProfileRequest = ProfileForm;

export const useCreateProfile = () => {
  const router = useRouter();
  const queryClinet = useQueryClient();

  return useMutation<unknown, unknown, CreateProfileRequest>({
    mutationFn: (data: CreateProfileRequest) => post('/api/profiles', data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClinet.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      router.replace('/profile?major=all');
    },
  });
};

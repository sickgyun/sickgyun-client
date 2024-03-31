import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { put } from '@/libs/api/client';
import type { ProfileForm } from '@/types/profile';

export type UpdateProfileRequest = ProfileForm;

export const useUpdateProfile = () => {
  const router = useRouter();
  const queryClinet = useQueryClient();

  return useMutation<unknown, unknown, UpdateProfileRequest>({
    mutationFn: (data: UpdateProfileRequest) => put('/api/profiles', data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClinet.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      router.replace('/profile?major=all');
    },
  });
};

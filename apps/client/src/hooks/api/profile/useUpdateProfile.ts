import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { PROFILE_QUERY_KEY } from './useGetProfile';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { put } from '@/libs/api/client';
import type { ProfileForm } from '@/types/profile';

export type UpdateProfileRequest = ProfileForm;

export const useUpdateProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, UpdateProfileRequest>({
    mutationFn: (data) => put('/profiles', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_QUERY_KEY] });
      router.replace('/profile');
    },
  });
};

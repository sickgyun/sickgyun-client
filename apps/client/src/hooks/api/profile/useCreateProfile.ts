import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { post } from '@/libs/api/client';
import type { ProfileForm } from '@/types/profile';

export type CreateProfileRequest = ProfileForm;

export const useCreateProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, CreateProfileRequest>({
    mutationFn: (data: CreateProfileRequest) => post('/api/profiles', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace('/profile');
    },
  });
};

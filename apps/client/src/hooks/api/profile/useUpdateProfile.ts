import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { put } from '@/libs/api/client';
import type { ProfileForm } from '@/types/profile';

export type UpdateProfileRequest = ProfileForm;

export const useUpdateProfile = () => {
  const queryClinet = useQueryClient();

  return useMutation<unknown, unknown, UpdateProfileRequest>({
    mutationFn: (data: UpdateProfileRequest) => put('/api/profiles', data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
    },
  });
};

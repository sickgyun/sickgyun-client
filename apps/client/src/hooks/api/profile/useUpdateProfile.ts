import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { PROFILE_QUERY_KEY } from './useGetProfile';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { useLogAnalyticsEvent } from '@/hooks/common/useLogAnalyticsEvent';
import { put } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';
import type { ProfileFormType } from '@/types/profile';

export type UpdateProfileRequest = ProfileFormType;

export const useUpdateProfile = (profileForm: ProfileFormType) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();

  return useMutation<unknown, AxiosError<ApiErrorScheme>, UpdateProfileRequest>({
    mutationFn: (data) => put('/profiles', data),
    onSuccess: () => {
      logClickEvent({ name: 'click_update_profile', params: profileForm });
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_QUERY_KEY] });
      router.replace('/profile');
    },
  });
};

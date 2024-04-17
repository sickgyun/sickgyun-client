import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { useLogAnalyticsEvent } from '@/hooks/common/useLogAnalyticsEvent';
import { del } from '@/libs/api/client';
import type { ApiErrorScheme } from '@/libs/exceptions';

export const useDeleteProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();

  return useMutation<unknown, AxiosError<ApiErrorScheme>>({
    mutationFn: () => del('/profiles/mine'),
    onSuccess: () => {
      logClickEvent({ name: 'click_delete_profile_mine' });
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace('/profile');
    },
  });
};

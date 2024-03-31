import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { USER_QUERY_KEY } from '../user/useGetUser';
import { PROFILE_LIST_QUERY_KEY } from './useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from './useGetProfileMine';
import { del } from '@/libs/api/client';

export const useDeleteProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => del('/api/profiles/mine'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace('/profile?major=all');
    },
  });
};

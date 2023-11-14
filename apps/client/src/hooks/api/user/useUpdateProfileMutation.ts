import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_INFORMATION_QUERY_KEY } from './useGetUserInformation';
import { put } from '@/libs/api/client';

type UpdateProfileMutationRequest = {
  email: string;
  githubId: string;
  company: string;
};

type UpdateProfileMutationResponse = {
  message: string;
};

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateProfileMutationResponse,
    { message?: string },
    UpdateProfileMutationRequest
  >({
    mutationFn: ({ email, githubId, company }: UpdateProfileMutationRequest) =>
      put<UpdateProfileMutationResponse>('/user/update', { email, githubId, company }),
    onSuccess: () => {
      alert('프로필 업데이트 성공');
      queryClient.invalidateQueries({ queryKey: [USER_INFORMATION_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 업데이트 실패');
    },
  });
};

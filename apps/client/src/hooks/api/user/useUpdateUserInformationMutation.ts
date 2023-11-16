import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_INFORMATION_QUERY_KEY } from './useGetUserInformation';
import { put } from '@/libs/api/client';

type UpdateUserInformationMutationRequest = {
  email: string;
  githubId: string;
};

type UpdateUserInformationMutationResponse = {
  message: string;
};

export const useUpdateUserInformationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateUserInformationMutationResponse,
    { message?: string },
    UpdateUserInformationMutationRequest
  >({
    mutationFn: ({ email, githubId }: UpdateUserInformationMutationRequest) =>
      put<UpdateUserInformationMutationResponse>('/user', { email, githubId }),
    onSuccess: () => {
      alert('프로필 업데이트 성공');
      queryClient.invalidateQueries({ queryKey: [USER_INFORMATION_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 업데이트 실패');
    },
  });
};

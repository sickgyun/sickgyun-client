import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENT_PROFILE_QUERY_KEY } from './useGetStudentProfile';
import { STUDENT_PROFILE_LIST_QUERY_KEY } from './useGetStudentProfileList';
import { patch } from '@/libs/api/client';

type UpdateStudentProfileMutationRequest = {
  githubId?: string;
  email?: string;
  bio?: string;
  company?: string;
  position: string;
};

type UpdateStudentProfileMutationResponse = {
  message: string;
};

export const useUpdateStudentProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateStudentProfileMutationResponse,
    { message?: string },
    UpdateStudentProfileMutationRequest
  >({
    mutationFn: (updateStudentProfileRequestData: UpdateStudentProfileMutationRequest) =>
      patch<UpdateStudentProfileMutationResponse>(
        '/student-profile',
        updateStudentProfileRequestData
      ),
    onSuccess: () => {
      alert('프로필 수정 성공');
      queryClient.invalidateQueries({
        queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [STUDENT_PROFILE_QUERY_KEY],
      });
    },
    onError: () => {
      alert('프로필 수정 실패');
    },
  });
};

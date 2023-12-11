import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENT_PROFILE_QUERY_KEY } from './useGetStudentProfile';
import { STUDENT_PROFILE_LIST_QUERY_KEY } from './useGetStudentProfileList';
import { del } from '@/libs/api/client';

type DeleteStudentProfileMutationResponse = {
  message: string;
};

export const useDeleteStudentProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteStudentProfileMutationResponse, { message?: string }>({
    mutationFn: () => del<DeleteStudentProfileMutationResponse>('/student-profile'),
    onSuccess: () => {
      alert('프로필 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [STUDENT_PROFILE_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 삭제 실패');
    },
  });
};

import { useMutation } from '@tanstack/react-query';
import { del } from '@/libs/api/client';

type DeleteStudentProfileMutationResponse = {
  message: string;
};

export const useDeleteStudentProfileMutation = () => {
  return useMutation<DeleteStudentProfileMutationResponse, { message?: string }>({
    mutationFn: () => del<DeleteStudentProfileMutationResponse>('/student-profile'),
    onSuccess: () => {
      alert('프로필 삭제 성공');
    },
    onError: () => {
      alert('프로필 삭제 실패');
    },
  });
};

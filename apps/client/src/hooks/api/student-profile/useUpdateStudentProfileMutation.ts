import { useMutation } from '@tanstack/react-query';
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
    },
    onError: () => {
      alert('프로필 수정 실패');
    },
  });
};

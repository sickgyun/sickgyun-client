import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

type CreateStudentProfileMutationRequest = {
  userCode: number;
  name: string;
  profileUrl?: string;
  bio?: string;
  email?: string;
  cardinal: number;
  githubId?: string;
  company?: string;
  position: string;
  isGraduate: boolean;
};

type CreateStudentProfileMutationResponse = {
  message: string;
};

export const useCreateStudentProfileMutation = () => {
  return useMutation<
    CreateStudentProfileMutationResponse,
    { message?: string },
    CreateStudentProfileMutationRequest
  >({
    mutationFn: (createStudentProfileRequestData: CreateStudentProfileMutationRequest) =>
      post<CreateStudentProfileMutationResponse>(
        '/student/profile',
        createStudentProfileRequestData
      ),
    onSuccess: () => {
      alert('프로필 등록 성공');
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

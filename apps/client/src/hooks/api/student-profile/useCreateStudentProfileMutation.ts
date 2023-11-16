import { useMutation, useQueryClient } from '@tanstack/react-query';
import { STUDENT_PROFILE_QUERY_KEY } from './useGetStudentProfile';
import { STUDENT_PROFILE_LIST_QUERY_KEY } from './useGetStudentProfileList';
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
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({ queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [STUDENT_PROFILE_QUERY_KEY] });
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

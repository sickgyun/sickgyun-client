import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

type RegisterSeniorMutationRequest = {
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

type RegisterSeniorMutationResponse = {
  message: string;
};

export const useRegisterSeniorMutation = () => {
  return useMutation<
    RegisterSeniorMutationResponse,
    { message?: string },
    RegisterSeniorMutationRequest
  >({
    mutationFn: (registerSeniorRequestData: RegisterSeniorMutationRequest) =>
      post<RegisterSeniorMutationResponse>('/senior', registerSeniorRequestData),
    onSuccess: () => {
      alert('프로필 등록 성공');
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

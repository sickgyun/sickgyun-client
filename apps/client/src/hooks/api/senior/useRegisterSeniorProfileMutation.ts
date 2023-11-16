import { useMutation } from '@tanstack/react-query';
import { post } from '@/libs/api/client';

type RegisterSeniorProfileMutationRequest = {
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

type RegisterSeniorProfileMutationResponse = {
  message: string;
};

export const useRegisterSeniorProfileMutation = () => {
  return useMutation<
    RegisterSeniorProfileMutationResponse,
    { message?: string },
    RegisterSeniorProfileMutationRequest
  >({
    mutationFn: (
      registerSeniorProfileRequestData: RegisterSeniorProfileMutationRequest
    ) =>
      post<RegisterSeniorProfileMutationResponse>(
        '/senior',
        registerSeniorProfileRequestData
      ),
    onSuccess: () => {
      alert('프로필 등록 성공');
    },
    onError: () => {
      alert('프로필 등록 실패');
    },
  });
};

import { useQuery } from '@tanstack/react-query';
import { get } from '@/libs/api/client';

export type UserInformationData = {
  userCode: number;
  githubId: string;
  email: string;
  profileUrl?: string;
  name: string;
  cardinal: number;
  company: string;
  role: 'STUDENT' | 'TEACHER';
  isGraduate: boolean;
};

export type UserInformationResponse = {
  message: string;
  data: UserInformationData;
};

export const USER_INFORMATION_QUERY_KEY = 'userInformation';

export const useGetUserInformation = () => {
  const userInformationQuery = useQuery<UserInformationResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await get<UserInformationResponse>('/user'),
  });

  return { userInformationData: userInformationQuery.data?.data };
};

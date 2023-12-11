import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { Storage } from '@/libs/storage';
import { useQuery } from '@tanstack/react-query';

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
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userInformationQuery = useQuery<UserInformationResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await get<UserInformationResponse>('/user'),
    enabled: Boolean(accessToken),
  });

  return {
    userInformationData: userInformationQuery.data?.data,
    ...userInformationQuery,
  };
};

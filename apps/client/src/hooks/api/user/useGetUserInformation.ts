import { useSuspenseQuery } from '@suspensive/react-query';
import { get } from '@/libs/api/client';

type UserInfoResponse = {
  github_id: string;
  profile_url: string;
  name: string;
  cardinal: number;
  role: 'STUDENT' | 'TEACHER';
  isGraduate: boolean;
};

export const USER_INFORMATION_QUERY_KEY = 'userInformation';

export const useGetUserInformation = () => {
  const { data: userInformation, ...restQuery } = useSuspenseQuery<UserInfoResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await get<UserInfoResponse>('/user'),
  });

  return { userInformation, ...restQuery };
};

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
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

const fetchUserInformation = () => {
  return get<UserInfoResponse>('/user');
};

export const useGetUserInformation = () => {
  const [userInformation, setUserInformation] = useState<UserInfoResponse>({
    github_id: '',
    profile_url: '',
    name: '',
    cardinal: 0,
    role: 'STUDENT',
    isGraduate: false,
  });

  const userInformationQuery = useQuery<UserInfoResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await fetchUserInformation(),
  });

  useEffect(() => {
    const { data: userInformation } = userInformationQuery;

    if (userInformation) {
      setUserInformation(userInformation);
    }
  }, [userInformationQuery]);

  return { userInformation };
};

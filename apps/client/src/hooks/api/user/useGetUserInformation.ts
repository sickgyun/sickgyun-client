import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { userInformationState } from '@/store/UserInformation/userInformationState';

export type UserInformationResponse = {
  github_id: string;
  profile_url: string;
  name: string;
  cardinal: number;
  role: 'STUDENT' | 'TEACHER';
  isGraduate: boolean;
};

export const USER_INFORMATION_QUERY_KEY = 'userInformation';

export const useGetUserInformation = () => {
  const [userInformation, setUserInformation] = useRecoilState(userInformationState);
  const accessToken = window.localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userInformationQuery = useQuery<UserInformationResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await get<UserInformationResponse>('/user'),
    enabled: Boolean(accessToken),
  });

  useEffect(() => {
    const { data: userInformation } = userInformationQuery;

    if (userInformation) {
      setUserInformation(userInformation);
    }
  }, [setUserInformation, userInformationQuery]);

  return { userInformation };
};

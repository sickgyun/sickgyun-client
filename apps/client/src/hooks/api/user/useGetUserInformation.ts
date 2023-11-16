import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { get } from '@/libs/api/client';
import { Storage } from '@/libs/localStorage/storage';
import { userInformationState } from '@/store/UserInformation/userInformationState';

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
  const [userInformation, setUserInformation] = useRecoilState(userInformationState);
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  const userInformationQuery = useQuery<UserInformationResponse>({
    queryKey: [USER_INFORMATION_QUERY_KEY],
    queryFn: async () => await get<UserInformationResponse>('/user'),
    enabled: Boolean(accessToken),
  });

  useEffect(() => {
    const { data: userInformationQueryData } = userInformationQuery;

    if (userInformationQueryData) {
      if (userInformationQueryData.data) {
        setUserInformation(userInformationQueryData.data);
      }
    }
  }, [setUserInformation, userInformationQuery]);

  return { userInformation };
};

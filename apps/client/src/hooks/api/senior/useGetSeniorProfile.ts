import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

type SeniorProfileData = {
  name: string;
  bio?: string;
  email?: string;
  profileUrl?: string;
  cardinal: number;
  githubId?: string;
  company?: string;
  position: string;
};

type SeniorProfileResponse = {
  message: string;
  data: SeniorProfileData;
};

export const SENIOR_PROFILE_QUERY_KEY = 'seniorProfile';

export const useGetSeniorProfile = (userCode: number) => {
  const [seniorProfile, setSeniorProfile] = useState<SeniorProfileData>({
    name: '',
    bio: '',
    email: '',
    profileUrl: '',
    cardinal: 0,
    githubId: '',
    company: '',
    position: '',
  });

  const seniorProfileQuery = useQuery<SeniorProfileResponse>({
    queryKey: [SENIOR_PROFILE_QUERY_KEY, userCode],
    queryFn: async () => await get<SeniorProfileResponse>(`/student/profile/${userCode}`),
  });

  useEffect(() => {
    const { data: seniorProfileData } = seniorProfileQuery;

    if (seniorProfileData) {
      setSeniorProfile(seniorProfileData.data);
    }
  }, [seniorProfileQuery, seniorProfileQuery.data]);

  return { seniorProfile };
};

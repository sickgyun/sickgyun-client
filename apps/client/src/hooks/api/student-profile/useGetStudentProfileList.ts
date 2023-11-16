import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

export type StudentProfileData = {
  userCode: number;
  name: string;
  bio?: string;
  profileUrl?: string;
  cardinal: number;
  company?: string;
  position: string;
};

export type StudentProfileListResponse = {
  message: string;
  dataList: StudentProfileData[];
};

export const STUDENT_PROFILE_LIST_QUERY_KEY = 'studentProfileList';

export const useGetStudentProfileList = (positionQueryParams: string) => {
  const [studentProfileList, setStudentProfileList] = useState<StudentProfileData[]>([]);

  const studentProfileListQuery = useQuery<StudentProfileListResponse>({
    queryKey: [STUDENT_PROFILE_LIST_QUERY_KEY, positionQueryParams],
    queryFn: async () =>
      await get<StudentProfileListResponse>(
        `/student/profile/?position=${positionQueryParams}`
      ),
  });

  useEffect(() => {
    const { data: studentProfileListQueryData } = studentProfileListQuery;

    if (studentProfileListQueryData) {
      setStudentProfileList(studentProfileListQueryData.dataList);
    }
  }, [studentProfileListQuery]);

  return { studentProfileList };
};

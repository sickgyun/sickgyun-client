import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { get } from '@/libs/api/client';

export type JobPostingListData = {
  title: string;
  imageUrl?: string;
  companyName: string;
  detailLink: string;
};

export type JobPostingListResponse = {
  message: string;
  dataList: JobPostingListData[];
};

export const JOB_POSTING_LIST_QUERY_KEY = 'jobPostingList';

export const useGetJobPostingList = () => {
  const [jobPostingList, setJobPostingList] = useState<JobPostingListData[]>([]);

  const jobPostingListQuery = useQuery<JobPostingListResponse>({
    queryKey: [JOB_POSTING_LIST_QUERY_KEY],
    queryFn: async () => await get<JobPostingListResponse>(`/job-posting`),
  });

  useEffect(() => {
    const { data: jobPostingListQueryData } = jobPostingListQuery;

    if (jobPostingListQueryData) {
      setJobPostingList(jobPostingListQueryData.dataList);
    }
  }, [jobPostingListQuery]);

  return { jobPostingList };
};

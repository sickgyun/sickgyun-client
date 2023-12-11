import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

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
  const jobPostingListQuery = useQuery<JobPostingListResponse>({
    queryKey: [JOB_POSTING_LIST_QUERY_KEY],
    queryFn: async () => await get<JobPostingListResponse>(`/job-posting`),
  });

  return {
    jobPostingListData: jobPostingListQuery.data?.dataList,
    ...jobPostingListQuery,
  };
};

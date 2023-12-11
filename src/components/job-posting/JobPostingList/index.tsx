import { JOB_POSTING } from '@/constants/jobPosting';
import { Grid } from '@chakra-ui/react';

import JobPostingCard from '../JobPostingCard';

const JobPostingList = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="32px">
      {JOB_POSTING.map(jobPosting => (
        <JobPostingCard
          title={jobPosting.title}
          imageUrl={jobPosting.imageUrl}
          companyName={jobPosting.companyName}
          detailLink={jobPosting.detailLink}
        />
      ))}
    </Grid>
  );
};

export default JobPostingList;

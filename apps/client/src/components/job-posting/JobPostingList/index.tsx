import styled from '@emotion/styled';
import JobPostingCard from '../JobPostingCard';
import { JOB_POSTING } from '@/constants/job-posting';

const JobPostingList = () => {
  return (
    <StyledJobPostingList>
      {JOB_POSTING.map((jobPosting) => (
        <JobPostingCard
          title={jobPosting.title}
          thumbnail={jobPosting.thumbnail}
          companyName={jobPosting.companyName}
          detailLink={jobPosting.detailLink}
        />
      ))}
    </StyledJobPostingList>
  );
};

export default JobPostingList;

const StyledJobPostingList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

import styled from '@emotion/styled';
import RecuritCard from '../RecuritCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetRecuritList } from '@/hooks/api/recruit/useGetRecuritList';

const RecuritList = () => {
  const { recuritList } = useGetRecuritList();

  return (
    <StyledRecuritList>
      {recuritList.map((recurit) => (
        <RecuritCard
          key={recurit.id}
          title={recurit.reqruitName}
          thumbnail={recurit.imageSrc}
          companyName={recurit.company}
          href={recurit.href}
        />
      ))}
    </StyledRecuritList>
  );
};

export default withSuspense(RecuritList);

const StyledRecuritList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  height: 300px;
`;

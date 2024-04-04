import styled from '@emotion/styled';
import { Spinner } from '@sickgyun/ui';
import RecuritCard from '../RecuritCard';
import { useGetRecuritList } from '@/hooks/api/recruit/useGetRecuritList';

const RecuritList = () => {
  const { recuritList, isLoading } = useGetRecuritList();

  if (isLoading) {
    return <Spinner />;
  }

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

export default RecuritList;

const StyledRecuritList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetRecuritList } from '@/hooks/api/recruit/useGetRecuritList';

const RecuritList = () => {
  const { recuritList } = useGetRecuritList();

  return (
    <StyledRecuritList>
      {recuritList?.map((recurit) => (
        <RecuritCard
          key={recurit.id}
          title={recurit.reqruitName}
          thumbnail={recurit.imageSrc}
          companyName={recurit.company}
          detailLink=""
        />
      ))}
    </StyledRecuritList>
  );
};

export default withSuspense(RecuritList);

const StyledRecuritList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

type RecuritCardProps = {
  title: string;
  thumbnail?: string;
  companyName: string;
  detailLink: string;
};

const RecuritCard = ({ title, thumbnail, companyName, detailLink }: RecuritCardProps) => {
  const handleGoComapnyDetailPage = () => {
    window.open(detailLink);
  };

  return (
    <StyledRecuritCard onClick={handleGoComapnyDetailPage}>
      <StyledThumnailImage src={thumbnail} width={85} height={85} alt="Job Posting" />
      <Stack spacing={4}>
        <Text fontType="h4">{title}</Text>
        <Text fontType="p2" color="gray600">
          {companyName}
        </Text>
      </Stack>
    </StyledRecuritCard>
  );
};

const StyledRecuritCard = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 18px;
  width: 100%;
  height: 120px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledThumnailImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  width: 85px;
  height: 85px;
`;

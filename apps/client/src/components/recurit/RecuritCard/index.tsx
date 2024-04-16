import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useLogAnalyticsEvent } from '@/hooks/common/useLogAnalyticsEvent';

type RecuritCardProps = {
  title: string;
  thumbnail?: string;
  companyName: string;
  href: string;
};

const RecuritCard = ({ title, thumbnail, companyName, href }: RecuritCardProps) => {
  const { logClickEvent } = useLogAnalyticsEvent();

  const handleGoRecruitDetailPage = () => {
    window.open(href);
    logClickEvent({ name: 'click_recurit_card' });
  };

  return (
    <StyledRecuritCard onClick={handleGoRecruitDetailPage}>
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

export default RecuritCard;

const StyledRecuritCard = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 18px;
  width: 100%;
  height: 100%;

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

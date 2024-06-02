import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import RecuritCard from '../RecuritCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetRecuritList } from '@/hooks/api/recruit/useGetRecuritList';

const RecuritList = () => {
  const { recuritList } = useGetRecuritList();

  if (isEmpty(recuritList)) {
    return (
      <StyledFullHeight>
        <Text fontType="h4">앗! 채용 공고에 대한 정보가 없어요...</Text>
      </StyledFullHeight>
    );
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

export default withSuspense(RecuritList);

const StyledRecuritList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  height: 300px;
`;

const StyledFullHeight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

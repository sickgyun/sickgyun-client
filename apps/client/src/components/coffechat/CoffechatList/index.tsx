import styled from '@emotion/styled';
import CoffechatApplicationCard from '../CoffechatApplicationCard';
import CoffechatRequestCard from '../CoffechatRequestCard';
import type { CoffechatNotificationType } from '@/types/coffechat';

type CoffechatListProp = {
  coffechatNotificationType: CoffechatNotificationType;
};

const CoffechatList = ({ coffechatNotificationType }: CoffechatListProp) => {
  return (
    <StyledCoffechatList>
      {coffechatNotificationType === 'REQUEST' ? (
        <CoffechatRequestCard />
      ) : (
        <CoffechatApplicationCard />
      )}
    </StyledCoffechatList>
  );
};

export default CoffechatList;

const StyledCoffechatList = styled.div`
  display: flex;
  flex-direction: column;
`;

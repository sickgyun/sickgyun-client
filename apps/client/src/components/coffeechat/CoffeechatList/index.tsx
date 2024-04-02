import styled from '@emotion/styled';
import CoffeechatApplicationCard from '../CoffeechatApplicationCard';
import CoffeechatRequestCard from '../CoffeechatRequestCard';
import type { CoffeechatNotificationType } from '@/types/coffeechat';

type CoffeechatListProp = {
  coffeechatNotificationType: CoffeechatNotificationType;
};

const CoffeechatList = ({ coffeechatNotificationType }: CoffeechatListProp) => {
  return (
    <StyledCoffeechatList>
      {coffeechatNotificationType === 'RECEIVE' ? (
        <CoffeechatRequestCard />
      ) : (
        <CoffeechatApplicationCard />
      )}
    </StyledCoffeechatList>
  );
};

export default CoffeechatList;

const StyledCoffeechatList = styled.div`
  display: flex;
  flex-direction: column;
`;

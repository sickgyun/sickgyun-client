import styled from '@emotion/styled';
import CoffeechatReceiveCard from '../CoffeechatReceiveCard';
import CoffeechatSendCard from '../CoffeechatSendCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';
import { useGetSendCoffeechatList } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';
import type { CoffeechatType } from '@/types/coffeechat';

type CoffeechatListProps = {
  coffeechatType: CoffeechatType;
};

const CoffeechatList = ({ coffeechatType }: CoffeechatListProps) => {
  const { receiveCoffeechatList } = useGetReceiveCoffeechatList(coffeechatType);
  const { sendCoffeechatList } = useGetSendCoffeechatList(coffeechatType);
  const coffeechatList =
    coffeechatType === 'RECEIVE' ? receiveCoffeechatList : sendCoffeechatList;
  const CoffeechatCard =
    coffeechatType === 'RECEIVE' ? CoffeechatReceiveCard : CoffeechatSendCard;

  return (
    <StyledCoffeechatList>
      {coffeechatList.map((coffeechat) => (
        <CoffeechatCard {...coffeechat} />
      ))}
    </StyledCoffeechatList>
  );
};

export default withSuspense(CoffeechatList);

const StyledCoffeechatList = styled.div`
  display: flex;
  flex-direction: column;
`;

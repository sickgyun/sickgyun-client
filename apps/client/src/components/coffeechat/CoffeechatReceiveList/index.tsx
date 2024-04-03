import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import CoffeechatReceiveCard from '../CoffeechatReceiveCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';

const CoffeechatReceiveList = () => {
  const { receiveCoffeechatList } = useGetReceiveCoffeechatList();

  return (
    <StyledCoffeechatReceiveList>
      {!isEmpty(receiveCoffeechatList) ? (
        receiveCoffeechatList.map((coffeechat) => (
          <CoffeechatReceiveCard
            coffeechatId={coffeechat.id}
            fromUser={coffeechat.fromUser}
            state={coffeechat.state}
          />
        ))
      ) : (
        <Text fontType="h3">앗! 요청 내역이 없어요...</Text>
      )}
    </StyledCoffeechatReceiveList>
  );
};

export default withSuspense(CoffeechatReceiveList);

const StyledCoffeechatReceiveList = styled.div`
  display: flex;
  flex-direction: column;
`;

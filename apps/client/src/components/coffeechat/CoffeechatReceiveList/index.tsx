import styled from '@emotion/styled';
import { Spinner, Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import CoffeechatReceiveCard from '../CoffeechatReceiveCard';
import { useGetReceiveCoffeechatList } from '@/hooks/api/coffeechat/useGetReceiveCoffeechatList';

const CoffeechatReceiveList = () => {
  const { receiveCoffeechatList, isLoading } = useGetReceiveCoffeechatList();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledCoffeechatReceiveList>
      {!isEmpty(receiveCoffeechatList) ? (
        receiveCoffeechatList.map((coffeechat) => (
          <CoffeechatReceiveCard
            key={coffeechat.id}
            coffeechatId={coffeechat.id}
            fromUser={coffeechat.fromUser}
            state={coffeechat.state}
          />
        ))
      ) : (
        <Text fontType="h3">앗! 요청 받은 내역이 없어요...</Text>
      )}
    </StyledCoffeechatReceiveList>
  );
};

export default CoffeechatReceiveList;

const StyledCoffeechatReceiveList = styled.div`
  display: flex;
  flex-direction: column;
`;

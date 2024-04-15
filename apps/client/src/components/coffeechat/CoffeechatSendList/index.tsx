import styled from '@emotion/styled';
import { Spinner, Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import CoffeechatSendCard from '../CoffeechatSendCard';
import { useGetSendCoffeechatList } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';

const CoffeechatSendList = () => {
  const { sendCoffeechatList, isLoading } = useGetSendCoffeechatList();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledCoffeechatSendList>
      {!isEmpty(sendCoffeechatList) ? (
        sendCoffeechatList.map((coffeechat) => (
          <CoffeechatSendCard
            key={coffeechat.id}
            coffeechatId={coffeechat.id}
            toUser={coffeechat.toUser}
            state={coffeechat.state}
          />
        ))
      ) : (
        <Text fontType="h3" style={{ textAlign: 'center' }}>
          앗! 신청 한 내역이 없어요...
        </Text>
      )}
    </StyledCoffeechatSendList>
  );
};

export default CoffeechatSendList;

const StyledCoffeechatSendList = styled.div`
  display: flex;
  flex-direction: column;
`;

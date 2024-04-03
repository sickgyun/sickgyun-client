import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import CoffeechatSendCard from '../CoffeechatSendCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetSendCoffeechatList } from '@/hooks/api/coffeechat/useGetSendCoffeechatList';

const CoffeechatSendList = () => {
  const { sendCoffeechatList } = useGetSendCoffeechatList();

  return (
    <StyledCoffeechatSendList>
      {!isEmpty(sendCoffeechatList) ? (
        sendCoffeechatList.map((coffeechat) => (
          <CoffeechatSendCard coffeechatId={coffeechat.id} toUser={coffeechat.toUser} />
        ))
      ) : (
        <Text fontType="h3">앗! 신청 내역이 없어요...</Text>
      )}
    </StyledCoffeechatSendList>
  );
};

export default withSuspense(CoffeechatSendList);

const StyledCoffeechatSendList = styled.div`
  display: flex;
  flex-direction: column;
`;

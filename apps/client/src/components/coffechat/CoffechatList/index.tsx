import styled from '@emotion/styled';
import CoffechatCard from '../CoffechatCard';

const CoffechatList = () => {
  return (
    <StyledCoffechatList>
      <CoffechatCard />
    </StyledCoffechatList>
  );
};

export default CoffechatList;

const StyledCoffechatList = styled.div`
  display: flex;
  flex-direction: column;
`;

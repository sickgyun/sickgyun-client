import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

const Footer = () => {
  return (
    <StyledFooter>
      <Text styleType="body1" color="gray800">
        Copyright (c) sickgyun. All rights reserved.
      </Text>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 100%;
  height: 80px;
`;

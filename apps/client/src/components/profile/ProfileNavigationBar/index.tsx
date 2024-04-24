import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconExpandMoreFill } from '@seed-design/icon';
import { Button, Flex, Select, Stack, Text } from '@sickgyun/ui';

const ProfileNavigationBar = () => {
  return (
    <StyledProfileNavigationBar>
      <StyledProfileNavigationBarWrapper>
        <Stack direction="vertical" spacing={18}>
          <StyledMajorSelect>
            <Text fontType="h2">전체 분야</Text>
            <StyledIconExpandMoreFill />
            <StyledSelect>
              <option value="ALL">전체 분야</option>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="EMBEDDED">임베디드</option>
              <option value="GAME">게임</option>
              <option value="ETC">기타</option>
            </StyledSelect>
          </StyledMajorSelect>
          <Flex align="center" justify="space-between">
            <Stack direction="horizontal" align="center" spacing={16}>
              <Select width="130px">
                <option value="ALL">전체</option>
                <option value="FIRST">1기</option>
                <option value="SECOND">2기</option>
                <option value="THIRD">3기</option>
                <option value="FOURTH">4기</option>
              </Select>
            </Stack>
            <Stack direction="horizontal" align="center" spacing={12}>
              <Button styleType="secondary">연락처 수정</Button>
              <Button>프로필 수정</Button>
            </Stack>
          </Flex>
        </Stack>
      </StyledProfileNavigationBarWrapper>
    </StyledProfileNavigationBar>
  );
};

export default ProfileNavigationBar;

const StyledProfileNavigationBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  padding: 24px 0;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray100};
    background-color: ${theme.colors.white};
  `}
`;

const StyledProfileNavigationBarWrapper = styled.div`
  width: calc(80% - 32px);
  height: 100%;
  margin: 0 auto;
`;

const StyledMajorSelect = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconExpandMoreFill = styled(IconExpandMoreFill)`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const StyledSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 115px;
  height: 33px;
  cursor: pointer;
`;

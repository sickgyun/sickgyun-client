import styled from '@emotion/styled';
import { IconChevronRightFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Stack, Text } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import Logo from '../../Logo';

const SickgyunBanner = () => {
  const router = useRouter();

  const handleGoSickgyunPromotionPage = () => {
    router.push('/profile?major=ALL&promotion=SICKGYUN');
  };

  return (
    <StyledSickgyunBanner onClick={handleGoSickgyunPromotionPage}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h3">여러분들하고 커피챗하고 싶어서 식견 만들었어요</Text>
        <Stack direction="horizontal" align="center" spacing={4}>
          <Text fontType="h5">지금 바로 식견 팀과 커피챗하기</Text>
          <IconChevronRightFill width={18} height={18} color={colors.gray900} />
        </Stack>
      </Stack>
      <Logo width={180} height={64} />
    </StyledSickgyunBanner>
  );
};

export default SickgyunBanner;

const StyledSickgyunBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 0 40px;
  cursor: pointer;
`;

import styled from '@emotion/styled';
import { IconChevronRightFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';

const SickgyunInstagramBanner = () => {
  const handleGoInstagram = () => {
    window.open('https://www.instagram.com/sickgyun');
  };

  return (
    <StyledSickgyunInstagramBanner onClick={handleGoInstagram}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h2" color="gray900">
          드디어 식견 인스타그램이 개설되었어요
        </Text>
        <Stack direction="horizontal" align="center" spacing={4}>
          <Text fontType="h4" color="gray900">
            식견 인스타 구경하러 가기
          </Text>
          <IconChevronRightFill width={20} height={20} color={colors.gray900} />
        </Stack>
      </Stack>
      <Image
        src="/assets/svgs/instagram_logo.svg"
        width={120}
        height={120}
        alt="Instagram Logo"
      />
    </StyledSickgyunInstagramBanner>
  );
};

export default SickgyunInstagramBanner;

const StyledSickgyunInstagramBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  padding: 0 40px;
  cursor: pointer;
`;

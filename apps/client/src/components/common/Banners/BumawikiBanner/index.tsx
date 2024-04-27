import styled from '@emotion/styled';
import { IconChevronRightFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BumawikiBanner = () => {
  const router = useRouter();

  const handleGoBumawikiPromotionPage = () => {
    router.push('/profile?major=ALL&promotion=BUMAWIKI');
  };

  return (
    <StyledBumawikiBanner onClick={handleGoBumawikiPromotionPage}>
      <Stack direction="vertical" spacing={8}>
        <Text fontType="h2" color="white">
          부마위키 개발자와 커피챗 어떠세요?
        </Text>
        <Stack direction="horizontal" align="center" spacing={4}>
          <Text fontType="h4" color="white">
            지금 바로 커피챗 요청하기
          </Text>
          <IconChevronRightFill width={20} height={20} color={colors.white} />
        </Stack>
      </Stack>
      <Image
        src="/assets/svgs/bumawiki_logo.svg"
        width={180}
        height={64}
        alt="Bumawiki Logo"
      />
    </StyledBumawikiBanner>
  );
};

export default BumawikiBanner;

const StyledBumawikiBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: #274068;
  padding: 0 40px;
  cursor: pointer;
`;

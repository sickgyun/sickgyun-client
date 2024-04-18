'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import { useToast } from '@/libs/toast';

const SHARE_DATA = {
  title: '식견',
  url: 'https://sickgyun.com',
};

const MobilePage = () => {
  const { toast } = useToast();

  const handleShareButtonClick = async () => {
    if (navigator.canShare(SHARE_DATA)) {
      await navigator.share(SHARE_DATA);
    } else {
      await navigator.clipboard.writeText(SHARE_DATA.url);
      toast('주소가 복사되었습니다.');
    }
  };

  return (
    <StyledMobilPageLayout>
      <StyledMobilPage>
        <Logo width={160} height={54} />
        <Spacer height={24} />
        <Stack direction="vertical" align="center" spacing={12}>
          <Text fontType="h2" color="gray900">
            PC 환경에서 다시 접속해주세요
          </Text>
          <Text fontType="body2" color="gray900" style={{ textAlign: 'center' }}>
            귀찮게 해서 죄송해요ㅠ
            <br /> 식견은 아직 모바일 환경을 지원하지 않아요
            <br /> 최대한 빠른 시일내로 반응형 개발할게요...
          </Text>
        </Stack>
        <Spacer height={30} />
        <StyledCryPatrickStarImage
          src="/assets/gifs/cry_patrick_star.gif"
          alt="Cry Patrick Star"
          width={200}
          height={165}
        />
        <Spacer height={30} />
        <Stack direction="vertical" align="center" spacing={8} style={{ width: '100%' }}>
          <Text fontType="body2" color="gray600" style={{ textAlign: 'center' }}>
            카톡 '나에게 보내기'를 통해 PC로 링크를 옮겨주세요
          </Text>
          <Button onClick={handleShareButtonClick} size="large">
            PC로 식견 공유하기
          </Button>
        </Stack>
      </StyledMobilPage>
    </StyledMobilPageLayout>
  );
};

export default MobilePage;

const StyledMobilPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledMobilPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

const StyledCryPatrickStarImage = styled(Image)`
  border-radius: 12px;
`;

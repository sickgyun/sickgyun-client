'use client';

import styled from '@emotion/styled';
import { Button, Spacer, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import { useToast } from '@/libs/toast';
import { convertNewlineToJSX } from '@/utils/convertNewlineToJsx';

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
      toast.info('주소가 복사되었습니다.');
    }
  };

  return (
    <StyledMobilPageLayout>
      <StyledMobilPage>
        <Logo width={160} height={54} />
        <Spacer height={24} />
        <Stack direction="vertical" align="center" spacing={12}>
          <Text fontType="h3">PC에서 식견을 만나보세요</Text>
          <Text fontType="body2" style={{ textAlign: 'center' }}>
            {convertNewlineToJSX(
              '아직 모바일 환경을 지원하지 않아요.\n당황해하실 줄 알고 밑에 공유하기 버튼을 준비했어요.'
            )}
          </Text>
        </Stack>
        <Spacer height={30} />
        <StyledJimmyFallonImage
          src="/assets/gifs/jimmy_fallon.gif"
          alt="Cry Patrick Star"
          width={220}
          height={157}
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

const StyledJimmyFallonImage = styled(Image)`
  border-radius: 12px;
`;

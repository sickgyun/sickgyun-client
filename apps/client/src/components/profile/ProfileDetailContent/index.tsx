import styled from '@emotion/styled';
import {
  IconChevronRightFill,
  IconReviewStarFill,
  IconStoryArticleFill,
  IconTrashFill,
} from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, InfoBox, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDeleteConfirm from '../ProfileDeleteConfirm';
import FullHeightSpinner from '@/components/common/FullHeightSpinner';
import { useGetProfile } from '@/hooks/api/profile/useGetProfile';
import { useUser } from '@/hooks/common/useUser';
import { convertNewlineToJSX } from '@/utils/convertNewlineToJsx';

type ProfileDetailContentProps = {
  profileId: number;
  onProfileDetailModalClose: VoidFunction;
};

const ProfileDetailContent = ({
  profileId,
  onProfileDetailModalClose,
}: ProfileDetailContentProps) => {
  const overlay = useOverlay();
  const { user } = useUser();
  const { profile, isFetching } = useGetProfile(profileId);
  const isProfileMine = user.profileId === profile.id;
  const hasProfileInformation = Boolean(
    profile.githubId || profile.resumeUrl || profile.portfolioUrl
  );

  const openProfileDeleteConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <ProfileDeleteConfirm
        isOpen={isOpen}
        onClose={close}
        onProfileDetailModalClose={onProfileDetailModalClose}
      />
    ));
  };

  const handleGoGithub = () => {
    window.open(`https://github.com/${profile.githubId}`);
  };

  const handleGoResume = () => {
    window.open(profile.resumeUrl);
  };

  const handleGoPortfolio = () => {
    window.open(profile.portfolioUrl);
  };

  if (isFetching) {
    return <FullHeightSpinner />;
  }

  return (
    <StyledProfileDetailContent>
      <Stack
        direction="horizontal"
        spacing={24}
        align="flex-start"
        style={{ height: '94px' }}
      >
        <StyledProfileImage src={profile.imageUrl} width={94} height={94} alt="Profile" />
        <Stack spacing={4} style={{ flex: 1, width: '100%' }}>
          <Stack
            direction="horizontal"
            align="center"
            justify="space-between"
            spacing={6}
          >
            <Stack direction="horizontal" align="center" spacing={6}>
              <Text fontType="h3">{profile.name}</Text>
              <Text fontType="body2" color="gray600">
                {profile.cardinal}기
              </Text>
            </Stack>
            {isProfileMine && <StyledDeleteButton onClick={openProfileDeleteConfirm} />}
          </Stack>
          <Text fontType="body2" color="gray600">
            관심 있는 분야: {profile.major}
          </Text>
          <Text fontType="body2" color="gray600">
            {profile.company
              ? `🏢 ${profile.company}`
              : '🏫 부산소프트웨어마이스터고등학교'}
          </Text>
        </Stack>
      </Stack>
      {profile?.introduction && (
        <InfoBox>{convertNewlineToJSX(profile.introduction)}</InfoBox>
      )}
      {hasProfileInformation && (
        <Stack spacing={16}>
          <Text fontType="h3">정보</Text>
          <Stack spacing={16}>
            {profile?.portfolioUrl && (
              <StyledInfoBox onClick={handleGoPortfolio}>
                <Flex align="center" justify="space-between">
                  <Stack direction="horizontal" align="center" spacing={8}>
                    <IconReviewStarFill width={16} height={16} color={colors.gray400} />
                    <Text fontType="body2">포트폴리오는 어떻게 구성되어 있을까요?</Text>
                  </Stack>
                  <Stack direction="horizontal" align="center" spacing={4}>
                    <Text fontType="body3" color="gray700">
                      포트폴리오 바로가기
                    </Text>
                    <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                  </Stack>
                </Flex>
              </StyledInfoBox>
            )}
            {profile?.resumeUrl && (
              <StyledInfoBox onClick={handleGoResume}>
                <Flex align="center" justify="space-between">
                  <Stack direction="horizontal" align="center" spacing={8}>
                    <IconStoryArticleFill width={16} height={16} color={colors.gray400} />
                    <Text fontType="body2">이력서가 궁금하다면?</Text>
                  </Stack>
                  <Stack direction="horizontal" align="center" spacing={4}>
                    <Text fontType="body3" color="gray700">
                      이력서 바로가기
                    </Text>
                    <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                  </Stack>
                </Flex>
              </StyledInfoBox>
            )}
            {profile?.githubId && (
              <StyledInfoBox onClick={handleGoGithub}>
                <Flex align="center" justify="space-between">
                  <Stack direction="horizontal" align="center" spacing={8}>
                    <Image
                      src="/assets/svgs/github_icon.svg"
                      width={16}
                      height={16}
                      alt="Github Logo"
                    />
                    <Text fontType="body2">깃허브를 구경해봐요!</Text>
                  </Stack>
                  <Stack direction="horizontal" align="center" spacing={4}>
                    <Text fontType="body3" color="gray700">
                      깃허브 바로가기
                    </Text>
                    <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                  </Stack>
                </Flex>
              </StyledInfoBox>
            )}
          </Stack>
        </Stack>
      )}
    </StyledProfileDetailContent>
  );
};

export default ProfileDetailContent;

const StyledProfileDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const StyledProfileImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const StyledDeleteButton = styled(IconTrashFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const StyledInfoBox = styled(InfoBox)`
  cursor: pointer;
`;

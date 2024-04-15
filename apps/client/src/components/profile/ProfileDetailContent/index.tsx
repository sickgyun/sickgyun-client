import styled from '@emotion/styled';
import { IconChevronRightFill, IconTrashFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, InfoBox, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDeleteConfirm from '../ProfileDeleteConfirm';
import FullHeightSpinner from '@/components/common/FullHeightSpinner';
import { useGetProfile } from '@/hooks/api/profile/useGetProfile';
import { useUser } from '@/hooks/common/useUser';

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
  const { profile, isStale } = useGetProfile(profileId);
  const isProfileMine = user.profileId === profile.id;
  const hasProfileInformation = Boolean(
    profile.githubId || profile.resumeUrl || profile.portfolioUrl || profile.email
  );

  const openDeleteProfileConfirm = () => {
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

  const handleGoEmail = () => {
    window.open(`mailto: ${profile.email}`);
  };

  const handleGoResume = () => {
    window.open(profile.resumeUrl);
  };

  const handleGoPortfolio = () => {
    window.open(profile.portfolioUrl);
  };

  if (isStale) {
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
        <Stack style={{ width: '100%' }} spacing={4}>
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
            {isProfileMine && <StyledDeleteButton onClick={openDeleteProfileConfirm} />}
          </Stack>
          <Text fontType="body2" color="gray600">
            관심 있는 분야: {profile.major}
          </Text>
          <Stack direction="horizontal" spacing={6} align="center">
            <Image src="/assets/svgs/company.svg" height={16} width={16} alt="Company" />
            <Text fontType="body2" color="gray600">
              {profile?.company ? profile.company : '부산소프트웨어마이스터고등학교'}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      {profile?.introduction && (
        <Stack spacing={16}>
          <Text fontType="h3">소개 말</Text>
          <StyledIntroduceBox>
            <Text fontType="body2" color="gray600">
              {profile.introduction}
            </Text>
          </StyledIntroduceBox>
        </Stack>
      )}
      {hasProfileInformation && (
        <Stack spacing={16}>
          <Text fontType="h3">정보</Text>
          <Stack spacing={16}>
            {profile?.githubId && (
              <StyledInfoBox onClick={handleGoGithub}>
                <Text fontType="body2">👀 깃허브를 구경해봐요!</Text>
                <Stack direction="horizontal" align="center" spacing={4}>
                  <Text fontType="body3" color="gray700">
                    깃허브 바로가기
                  </Text>
                  <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                </Stack>
              </StyledInfoBox>
            )}
            {profile?.resumeUrl && (
              <StyledInfoBox onClick={handleGoResume}>
                <Text fontType="body2">📑 이력서가 궁금하다면?</Text>
                <Stack direction="horizontal" align="center" spacing={4}>
                  <Text fontType="body3" color="gray700">
                    이력서 바로가기
                  </Text>
                  <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                </Stack>
              </StyledInfoBox>
            )}
            {profile?.portfolioUrl && (
              <StyledInfoBox onClick={handleGoPortfolio}>
                <Text fontType="body2">💼 포트폴리오는 어떻게 구성되어 있을까요?</Text>
                <Stack direction="horizontal" align="center" spacing={4}>
                  <Text fontType="body3" color="gray700">
                    포트폴리오 바로가기
                  </Text>
                  <IconChevronRightFill width={16} height={16} color={colors.gray700} />
                </Stack>
              </StyledInfoBox>
            )}
            {profile?.email && (
              <StyledInfoBox onClick={handleGoEmail}>
                <Text fontType="body2">📨 이메일</Text>
                <Flex align="center">
                  <Text fontType="body3" color="gray700">
                    이메일 바로가기
                  </Text>
                  <IconChevronRightFill width={24} height={24} color={colors.gray700} />
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
`;

const StyledDeleteButton = styled(IconTrashFill)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const StyledIntroduceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  width: 100%;
  min-height: 56px;
`;

const StyledInfoBox = styled(InfoBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

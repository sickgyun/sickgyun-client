import styled from '@emotion/styled';
import { IconChevronRightFill, IconSettingFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Spinner, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDeleteConfirm from '../ProfileDeleteConfirm';
import FullHeight from '@/components/common/FullHeight';
import { withSuspense } from '@/hocs/withSuspense';
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
  const { profile } = useGetProfile(profileId);
  const isUserProfile = user.profileId === profile.id;

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

  return (
    <StyledProfileDetailContent>
      <Stack
        direction="horizontal"
        spacing={24}
        align="flex-start"
        style={{ height: '94px' }}
      >
        <Image
          src={profile.imageUrl}
          width={94}
          height={94}
          style={{ borderRadius: '8px' }}
          alt="Student Profile"
        />
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
            {isUserProfile && <StyledSettingButton onClick={openDeleteProfileConfirm} />}
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
      <Stack spacing={16}>
        <Text fontType="h3">정보</Text>
        <Stack spacing={16}>
          {profile?.githubId && (
            <StyledNavigationButton onClick={handleGoGithub}>
              <Text fontType="body2">👀 선배의 깃허브는 어떻게 되어 있을까요?</Text>
              <Stack direction="horizontal" align="center" spacing={4}>
                <Text fontType="body3" color="gray700">
                  깃허브 바로가기
                </Text>
                <IconChevronRightFill width={16} height={16} color={colors.gray700} />
              </Stack>
            </StyledNavigationButton>
          )}
          {profile?.resumeUrl && (
            <StyledNavigationButton onClick={handleGoResume}>
              <Text fontType="body2">📑 선배의 이력서를 참고해봐요! </Text>
              <Stack direction="horizontal" align="center" spacing={4}>
                <Text fontType="body3" color="gray700">
                  이력서 바로가기
                </Text>
                <IconChevronRightFill width={16} height={16} color={colors.gray700} />
              </Stack>
            </StyledNavigationButton>
          )}
          {profile?.portfolioUrl && (
            <StyledNavigationButton onClick={handleGoPortfolio}>
              <Text fontType="body2">💼 선배 포트폴리오는 어떻게 구성되어 있을까요?</Text>
              <Stack direction="horizontal" align="center" spacing={4}>
                <Text fontType="body3" color="gray700">
                  포트폴리오 바로가기
                </Text>
                <IconChevronRightFill width={16} height={16} color={colors.gray700} />
              </Stack>
            </StyledNavigationButton>
          )}
          {profile?.email && (
            <StyledNavigationButton onClick={handleGoEmail}>
              <Text fontType="body2">📨 커피챗, 코드리뷰, 조언 요청하러가기</Text>
              <Flex align="center">
                <Text fontType="body3" color="gray700">
                  이메일 바로가기
                </Text>
                <IconChevronRightFill width={24} height={24} color={colors.gray700} />
              </Flex>
            </StyledNavigationButton>
          )}
        </Stack>
      </Stack>
    </StyledProfileDetailContent>
  );
};

export default withSuspense(ProfileDetailContent, () => (
  <FullHeight>
    <Spinner />
  </FullHeight>
));

const StyledProfileDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const StyledSettingButton = styled(IconSettingFill)`
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

const StyledNavigationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  width: 100%;
  height: 56px;
  cursor: pointer;
`;

import styled from '@emotion/styled';
import { IconReviewStarFill, IconStoryArticleFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDetailModal from '../ProfileDetailModal';
import type { GetProfileListResponse } from '@/hooks/api/profile/useGetProfileList';
import { useLogAnalyticsEvent } from '@/libs/logging';

type ProfileCardProps = Omit<GetProfileListResponse, 'id'>;

const ProfileCard = ({
  name,
  cardinal,
  imageUrl,
  major,
  profileId,
  userId,
  company,
  introduction,
  githubId,
  portfolioUrl,
  resumeUrl,
}: ProfileCardProps) => {
  const overlay = useOverlay();
  const { logClickEvent } = useLogAnalyticsEvent();

  const openProfileDetailModal = () => {
    logClickEvent({ name: 'click_profile_card' });
    overlay.open(({ isOpen, close }) => (
      <ProfileDetailModal
        isOpen={isOpen}
        onClose={close}
        profileId={profileId}
        userId={userId}
      />
    ));
  };

  return (
    <StyledProfileCard onClick={openProfileDetailModal}>
      <Stack
        direction="horizontal"
        align="center"
        spacing={24}
        style={{ height: '100%' }}
      >
        <StyledProfileImage src={imageUrl} width={88} height={88} alt="Profile" />
        <Stack spacing={6} style={{ flex: 1 }}>
          <Stack direction="horizontal" align="center" spacing={6}>
            <Text fontType="body1">{name}</Text>
            <Text fontType="body3" color="gray600">
              {cardinal}기 • {major}
            </Text>
          </Stack>
          {introduction && (
            <Text fontType="p2" color="gray600">
              {introduction.length === 20 ? introduction + '...' : introduction}
            </Text>
          )}
          <Text fontType="body2" color="gray600">
            {company ? `🏢 ${company}` : '🏫 부산소프트웨어마이스터고등학교'}
          </Text>
        </Stack>
      </Stack>
      <StyledProfilePresenceCheck direction="horizontal" align="center" spacing={8}>
        {portfolioUrl && (
          <IconReviewStarFill width={20} height={20} color={colors.gray400} />
        )}
        {resumeUrl && (
          <IconStoryArticleFill width={20} height={20} color={colors.gray400} />
        )}
        {githubId && (
          <Image
            src="/assets/svgs/github_icon.svg"
            width={20}
            height={20}
            alt="Github Logo"
          />
        )}
      </StyledProfilePresenceCheck>
    </StyledProfileCard>
  );
};

export default ProfileCard;

const StyledProfileCard = styled.div`
  position: relative;
  transition: all 0.25s ease;
  padding: 16px;
  border-radius: 8px;
  height: 120px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
    cursor: pointer;
  }
`;

const StyledProfileImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const StyledProfilePresenceCheck = styled(Stack)`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDetailModal from '../ProfileDetailModal';
import { useLogAnalyticsEvent } from '@/libs/logging';
import type { Major } from '@/types/profile';

type ProfileCardProps = {
  name: string;
  imageUrl: string;
  cardinal: number;
  major: Major;
  profileId: number;
  userId: number;
  company?: string;
  introduction?: string;
  isRecruited: boolean;
};

const ProfileCard = ({
  name,
  cardinal,
  imageUrl,
  major,
  profileId,
  userId,
  company,
  introduction,
  isRecruited,
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
        <StyledProfileImage src={imageUrl} width={88} height={88} alt="Student Profile" />
        <Stack spacing={6}>
          <Stack direction="horizontal" align="center" spacing={6}>
            <Text fontType="body1">{name}</Text>
            <Text fontType="body3" color="gray600">
              {cardinal}기 • {major}
            </Text>
          </Stack>
          {introduction && (
            <Text fontType="p2" color="gray600" isEllipsis={true}>
              {introduction.length === 20 ? introduction + '...' : introduction}
            </Text>
          )}
          <Stack direction="horizontal" spacing={6} align="center">
            <Image src="/assets/svgs/company.svg" width={16} height={16} alt="Company" />
            <Text fontType="body2" color="gray600">
              {isRecruited ? company : '부산소프트웨어마이스터고등학교'}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </StyledProfileCard>
  );
};

export default ProfileCard;

const StyledProfileCard = styled.div`
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
  height: 100%;
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconChevronRightFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Flex, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import Image from 'next/image';
import ProfileDetailModal from '../ProfileDetailModal';
import { textEllipsis } from '@/emotion';
import { useGetProfile } from '@/hooks/api/profile/useGetProfile';
import { useUser } from '@/hooks/common/useUser';
import { useLogAnalyticsEvent } from '@/libs/logging';
import { useToast } from '@/libs/toast';
import { convertNewlineToJSX } from '@/utils/convertNewlineToJsx';

type DirectProfileCardProps = {
  profileId: number;
  userId: number;
  introduction: string;
};

const DirectProfileCard = ({
  profileId,
  userId,
  introduction,
}: DirectProfileCardProps) => {
  const overlay = useOverlay();
  const { toast } = useToast();
  const { user } = useUser();
  const { logClickEvent } = useLogAnalyticsEvent();
  const { profile } = useGetProfile(profileId);

  const openProfileDetailModal = () => {
    if (!user.isLogin) {
      toast.error('로그인이 필요한 서비스에요.');
      return;
    }

    logClickEvent({ name: 'click_direct_profile_card' });
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
    <StyledDirectProfileCard onClick={openProfileDetailModal}>
      <Stack
        direction="horizontal"
        align="center"
        spacing={12}
        style={{ marginBottom: '14px' }}
      >
        <StyledProfileImage src={profile.imageUrl} width={56} height={56} alt="Profile" />
        <Stack
          direction="vertical"
          align="flex-start"
          spacing={6}
          style={{ width: '100%' }}
        >
          <Flex align="center" justify="space-between" style={{ width: '100%' }}>
            <Text fontType="body1">{profile.name}</Text>
            <IconChevronRightFill width={18} height={18} color={colors.gray900} />
          </Flex>
          <Text fontType="body3" color="gray600">
            {profile.cardinal}기 • {profile.major}
          </Text>
        </Stack>
      </Stack>
      <StyledIntroduction fontType="p2" color="gray600">
        {convertNewlineToJSX(introduction)}
      </StyledIntroduction>
    </StyledDirectProfileCard>
  );
};

export default DirectProfileCard;

const StyledDirectProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4 - 15px);
  height: 100%;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray200};
  `}
`;

const StyledProfileImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const StyledIntroduction = styled(Text)`
  ${textEllipsis}
`;

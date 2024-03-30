import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import React from 'react';
import ProfileCard from '../ProfileCard';
import ProfileDetailModal from '../ProfileDetailModal';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetProfileList } from '@/hooks/api/profile/useGetProfileList';

type ProfileListProps = {
  major: string;
};

const ProfileList = ({ major }: ProfileListProps) => {
  const overlay = useOverlay();
  const { profileList } = useGetProfileList([major.toUpperCase()]);

  const openProfileDetailModal = (profileId: number) => {
    overlay.open(({ isOpen, close }) => (
      <ProfileDetailModal isOpen={isOpen} onClose={close} profileId={profileId} />
    ));
  };

  return profileList.length > 0 ? (
    <StyledProfileList>
      {profileList.map((profile) => {
        return (
          <ProfileCard
            onClick={() => openProfileDetailModal(profile.id)}
            name={profile.name}
            imageUrl={profile.imageUrl}
            cardinal={profile.cardinal}
            major={profile.major}
            isRecruited={profile.isRecruited}
            company={profile.company}
            introduction={profile.introduction}
          />
        );
      })}
    </StyledProfileList>
  ) : (
    <Text fontType="h3">앗! 해당 분야의 학생이 없어요..</Text>
  );
};

export default withSuspense(ProfileList);

const StyledProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

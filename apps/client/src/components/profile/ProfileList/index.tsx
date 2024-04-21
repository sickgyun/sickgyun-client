import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import React from 'react';
import ProfileCard from '../ProfileCard';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetProfileList } from '@/hooks/api/profile/useGetProfileList';
import type { Major } from '@/types/profile';

type ProfileListProps = {
  major: Major;
};

const ProfileList = ({ major }: ProfileListProps) => {
  const { profileList } = useGetProfileList([major]);

  return !isEmpty(profileList) ? (
    <StyledProfileList>
      {profileList.map((profile) => {
        return (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            imageUrl={profile.imageUrl}
            cardinal={profile.cardinal}
            major={profile.major}
            isRecruited={profile.isRecruited}
            profileId={profile.id}
            userId={profile.userId}
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

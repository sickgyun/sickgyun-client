import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import React from 'react';
import ProfileCard from '../ProfileCard';
import ProfileDetailModal from '../ProfileDetailModal';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetProfileList } from '@/hooks/api/student-profile/useGetProfileList';

type ProfileListProps = {
  major: string;
};

const ProfileList = ({ major }: ProfileListProps) => {
  const overlay = useOverlay();
  // TODO: 백엔드 major=all 추가시 수정
  const { profileList } = useGetProfileList([major.toUpperCase()]);

  const openProfileDetailModal = (userCode: number) => {
    overlay.open(({ isOpen, close }) => (
      <ProfileDetailModal isOpen={isOpen} onClose={close} userCode={userCode} />
    ));
  };

  return profileList.length > 0 ? (
    <StyledProfileList>
      {profileList.map((studentProfile) => {
        const cardinal = studentProfile.admissionYear - 2020;

        return (
          <ProfileCard
            onClick={() => openProfileDetailModal(studentProfile.userId)}
            name={studentProfile.name}
            imageUrl={studentProfile.imageUrl}
            cardinal={cardinal}
            major={studentProfile.major}
            isRecruited={studentProfile.isRecruited}
            company={studentProfile.company}
            introduction={studentProfile.introduction}
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

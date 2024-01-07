import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import React from 'react';
import StudentProfileCard from '../StudentProfileCard';
import StudentProfileDetailModal from '../StudentProfileDetailModal';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetStudentProfileList } from '@/hooks/api/student-profile/useGetStudentProfileList';

type StudentProfileListProps = {
  positionQueryParams: string;
};

const StudentProfileList = ({ positionQueryParams }: StudentProfileListProps) => {
  const overlay = useOverlay();

  const { studentProfileListData } = useGetStudentProfileList(positionQueryParams);

  const openStudentProfileDetailModal = (userCode: number) => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileDetailModal isOpen={isOpen} onClose={close} userCode={userCode} />
    ));
  };

  return studentProfileListData.length > 0 ? (
    <StyledStudentProfileList>
      {studentProfileListData.map((studentProfile) => (
        <StudentProfileCard
          onClick={() => openStudentProfileDetailModal(studentProfile.userCode)}
          name={studentProfile.name}
          profileUrl={studentProfile.profileUrl}
          cardinal={studentProfile.cardinal}
          position={studentProfile.position}
          bio={studentProfile.bio}
          company={studentProfile.company}
        />
      ))}
    </StyledStudentProfileList>
  ) : (
    <Text fontType="h3">앗! 해당 분야의 학생이 없어요..</Text>
  );
};

export default withSuspense<StudentProfileListProps>(StudentProfileList);

const StyledStudentProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

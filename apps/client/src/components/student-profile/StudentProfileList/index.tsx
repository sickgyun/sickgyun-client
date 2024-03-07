import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import React from 'react';
import StudentProfileCard from '../StudentProfileCard';
import StudentProfileDetailModal from '../StudentProfileDetailModal';
import { withSuspense } from '@/hocs/withSuspense';
import { useGetStudentProfileList } from '@/hooks/api/student-profile/useGetStudentProfileList';

type StudentProfileListProps = {
  major: string;
};

const StudentProfileList = ({ major }: StudentProfileListProps) => {
  const overlay = useOverlay();
  // TODO: 백엔드 major=all 추가시 수정
  const { studentProfileList } = useGetStudentProfileList([major.toUpperCase()]);

  const openStudentProfileDetailModal = (userCode: number) => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileDetailModal isOpen={isOpen} onClose={close} userCode={userCode} />
    ));
  };

  return studentProfileList.length > 0 ? (
    <StyledStudentProfileList>
      {studentProfileList.map((studentProfile) => {
        const cardinal = studentProfile.admissionYear - 2020;

        return (
          <StudentProfileCard
            onClick={() => openStudentProfileDetailModal(studentProfile.userId)}
            name={studentProfile.name}
            imageUrl={studentProfile.imageUrl}
            cardinal={cardinal}
            major={studentProfile.major}
            isRecruited={studentProfile.isRecruited}
          />
        );
      })}
    </StyledStudentProfileList>
  ) : (
    <Text fontType="h3">앗! 해당 분야의 학생이 없어요..</Text>
  );
};

export default withSuspense(StudentProfileList);

const StyledStudentProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

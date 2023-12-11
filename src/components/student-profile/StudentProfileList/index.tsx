import { useGetStudentProfileList } from '@/hooks/api/student-profile/useGetStudentProfileList';
import { Grid, Text } from '@chakra-ui/react';
import { useOverlay } from '@toss/use-overlay';

import StudentProfileCard from '../StudentProfileCard';
import StudentProfileDetailModal from '../StudentProfileDetailModal';

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
    <Grid templateColumns="repeat(2, 1fr)" gap="32px">
      {studentProfileListData.map(studentProfile => (
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
    </Grid>
  ) : (
    <Text fontSize="20px" fontWeight="semibold">
      앗! 해당 분야의 학생이 없어요..
    </Text>
  );
};

export default StudentProfileList;

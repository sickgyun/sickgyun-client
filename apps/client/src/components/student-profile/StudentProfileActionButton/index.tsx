import styled from '@emotion/styled';
import { IconAddFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import StudentProfileCreateModal from '../StudentProfileCreateModal';
import StudentProfileUpdateModal from '../StudentProfileUpdateModal';

type StudentProfileActionButtonProps = {
  actionType: 'create' | 'update';
};

const StudentProfileActionButton = ({ actionType }: StudentProfileActionButtonProps) => {
  const overlay = useOverlay();

  const openStudentProfileCreateModal = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileCreateModal isOpen={isOpen} onClose={close} />
    ));
  };

  const openStudentProfileUpdateModal = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileUpdateModal isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledStudentProfileActionButton
      onClick={
        actionType === 'create'
          ? openStudentProfileCreateModal
          : openStudentProfileUpdateModal
      }
    >
      {actionType === 'create' ? (
        <>
          <Text fontType="h3" color="white">
            프로필 등록
          </Text>
          <IconAddFill width={20} height={20} color={colors.white} />
        </>
      ) : (
        <Text fontType="h3" color="white">
          내 프로필 수정
        </Text>
      )}
    </StyledStudentProfileActionButton>
  );
};

export default StudentProfileActionButton;

const StyledStudentProfileActionButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  right: 35px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 165px;
  height: 60px;
`;

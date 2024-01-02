import { AddIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

type StudentProfileCreateButtonProps = {
  onClick: VoidFunction;
};

const StudentProfileCreateButton = ({ onClick }: StudentProfileCreateButtonProps) => {
  return (
    <StyledStudentProfileCreateButton onClick={onClick}>
      <Text fontType="h3" color="white">
        프로필 등록
      </Text>
      <AddIcon color="white" width="20px" height="20px" />
    </StyledStudentProfileCreateButton>
  );
};

export default StudentProfileCreateButton;

const StyledStudentProfileCreateButton = styled.div`
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

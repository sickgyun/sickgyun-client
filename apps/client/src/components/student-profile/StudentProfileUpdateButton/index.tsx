import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';

type StudentProfileUpdateButtonProps = {
  onClick: VoidFunction;
};

const StudentProfileUpdateButton = ({ onClick }: StudentProfileUpdateButtonProps) => {
  return (
    <StyledStudentProfileUpdateButton onClick={onClick}>
      <Text fontType="h3" color="white">
        내 프로필 수정
      </Text>
    </StyledStudentProfileUpdateButton>
  );
};

export default StudentProfileUpdateButton;

const StyledStudentProfileUpdateButton = styled.div`
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

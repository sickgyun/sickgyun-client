import { AddIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';

type StudentProfileCreateButtonProps = {
  onClick: VoidFunction;
};

const StudentProfileCreateButton = ({ onClick }: StudentProfileCreateButtonProps) => {
  return (
    <Box
      onClick={onClick}
      display="flex"
      gap="8px"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      bottom="40px"
      right="35px"
      cursor="pointer"
      backgroundColor="primary"
      borderRadius="45px"
      boxShadow="md"
      width="165px"
      height="60px"
    >
      <Text fontSize="20px" fontWeight="bold" color="white">
        프로필 등록
      </Text>
      <AddIcon color="white" width="20px" height="20px" />
    </Box>
  );
};

export default StudentProfileCreateButton;

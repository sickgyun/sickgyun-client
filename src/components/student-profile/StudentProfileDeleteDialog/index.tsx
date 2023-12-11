import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
} from '@chakra-ui/react';

type StudentProfileDeleteDialogProps = {
  onDelete: () => void;
} & ModalProps;

const StudentProfileDeleteDialog = ({
  isOpen,
  onClose,
  onDelete,
}: StudentProfileDeleteDialogProps) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>프로필 삭제</AlertDialogHeader>
        <AlertDialogBody>정말 프로필을 삭제 하시겠습니까?</AlertDialogBody>
        <AlertDialogFooter>
          <Flex gap="12px">
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="red" onClick={onDelete}>
              삭제
            </Button>
          </Flex>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default StudentProfileDeleteDialog;

import { Spinner } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import { Suspense } from 'react';
import StudentProfileDetailContents from './StudentProfileDetailContents';

type StudentProfileDetailModalProps = {
  userCode: number;
} & ModalProps;

const StudentProfileDetailModal = ({
  isOpen,
  onClose,
  userCode,
}: StudentProfileDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="580px">
      <ModalContent>
        <ModalHeader>
          <Text fontType="h2">프로필 정보</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <StudentProfileDetailContents userCode={userCode} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StudentProfileDetailModal;

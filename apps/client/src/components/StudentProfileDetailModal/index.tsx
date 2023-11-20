import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';
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
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          프로필 정보
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Suspense fallback={<Spinner color="primary" />}>
            <StudentProfileDetailContents userCode={userCode} />
          </Suspense>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default StudentProfileDetailModal;

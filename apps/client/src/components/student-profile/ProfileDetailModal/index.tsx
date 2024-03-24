import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import ProfileDetailContents from './ProfileDetailContents';

type ProfileDetailModalProps = {
  userCode: number;
} & ModalProps;

const ProfileDetailModal = ({ isOpen, onClose, userCode }: ProfileDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="580px">
      <ModalContent>
        <ModalHeader>
          <Text fontType="h2">프로필 정보</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <ProfileDetailContents userCode={userCode} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileDetailModal;

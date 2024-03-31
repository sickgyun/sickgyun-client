import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import ProfileDetailContents from '../ProfileDetailContent';

type ProfileDetailModalProps = {
  profileId: number;
} & ModalProps;

const ProfileDetailModal = ({ isOpen, onClose, profileId }: ProfileDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="580px">
      <ModalContent>
        <ModalHeader>
          <Text fontType="h2">프로필 정보</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <ProfileDetailContents profileId={profileId} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileDetailModal;

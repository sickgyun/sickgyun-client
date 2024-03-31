import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import ProfileDetailContent from '../ProfileDetailContent';

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
          <ProfileDetailContent profileId={profileId} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileDetailModal;

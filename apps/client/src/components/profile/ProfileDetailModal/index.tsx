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
    <Modal isOpen={isOpen} onClose={onClose} style={{ width: '580px', height: '550px' }}>
      <ModalContent>
        <ModalHeader>
          <Text fontType="h2">프로필 정보</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <ProfileDetailContent
            profileId={profileId}
            onProfileDetailModalClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileDetailModal;

import styled from '@emotion/styled';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import ProfileDetailContent from '../ProfileDetailContent';

type ProfileDetailModalProps = {
  profileId: number;
} & ModalProps;

const ProfileDetailModal = ({ isOpen, onClose, profileId }: ProfileDetailModalProps) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onClose={onClose}
      style={{ width: '580px', height: '550px' }}
    >
      <ModalHeader>
        <Text fontType="h2">프로필 정보</Text>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <ProfileDetailContent profileId={profileId} onProfileDetailModalClose={onClose} />
      </ModalBody>
      <StyledModalFooter>asasdasdasds</StyledModalFooter>
    </StyledModal>
  );
};

export default ProfileDetailModal;

const StyledModal = styled(Modal)`
  position: relative;
`;

const StyledModalFooter = styled(ModalFooter)`
  position: sticky;
  bottom: 0;
  left: 0;
`;

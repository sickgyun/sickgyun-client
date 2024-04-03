import styled from '@emotion/styled';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import ProfileDetailContent from '../ProfileDetailContent';
import CoffeechatSendConfirm from '@/components/coffeechat/CoffeechatSendConfirm';
import { useUser } from '@/hooks/common/useUser';

type ProfileDetailModalProps = {
  profileId: number;
  userId: number;
} & ModalProps;

const ProfileDetailModal = ({
  isOpen,
  onClose,
  profileId,
  userId,
}: ProfileDetailModalProps) => {
  const overlay = useOverlay();
  const user = useUser();

  const openCoffeechatSendConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatSendConfirm
        isOpen={isOpen}
        onClose={close}
        onProfileDetailModalClose={onClose}
        userId={userId}
      />
    ));
  };

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Text fontType="h2">프로필 정보</Text>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <ProfileDetailContent profileId={profileId} onProfileDetailModalClose={onClose} />
      </ModalBody>
      {user.profileId !== profileId && (
        <StyledModalFooter>
          <Button onClick={openCoffeechatSendConfirm} size="large">
            커피챗 요청 보내기
          </Button>
        </StyledModalFooter>
      )}
    </StyledModal>
  );
};

export default ProfileDetailModal;

const StyledModal = styled(Modal)`
  position: relative;
  width: 600px;
  height: 600px;
`;

const StyledModalFooter = styled(ModalFooter)`
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

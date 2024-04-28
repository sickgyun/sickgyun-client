import styled from '@emotion/styled';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import { useRouter } from 'next/navigation';
import ProfileDetailContent from '../ProfileDetailContent';
import CoffeechatContactFormModal from '@/components/coffeechat/CoffeechatContactFormModal';
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
  const router = useRouter();
  const { user } = useUser();

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

  const openCoffeechatContactFormModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactFormModal isOpen={isOpen} onClose={close} />
    ));
  };

  const handleGoProfileUpdatePage = () => {
    onClose();
    router.push('/profile/update');
  };

  const handleCoffeechatRequestSend = () => {
    if (user.hasNotContact) {
      openCoffeechatContactFormModal();
    } else {
      openCoffeechatSendConfirm();
    }
  };

  return (
    <StyledProfileDetailModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Text fontType="h3">프로필 정보</Text>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <ProfileDetailContent profileId={profileId} onProfileDetailModalClose={onClose} />
      </ModalBody>
      <StyledProfileDetailModalFooter>
        {user.profileId !== profileId ? (
          <Button onClick={handleCoffeechatRequestSend} size="large">
            커피챗 요청 보내기
          </Button>
        ) : (
          <Stack direction="horizontal" spacing={12} style={{ width: '100%' }}>
            <StyledUpdateContactButton
              onClick={openCoffeechatContactFormModal}
              styleType="secondary"
              size="large"
            >
              연락처 {user.hasNotContact ? '생성' : '수정'}
            </StyledUpdateContactButton>
            <Button onClick={handleGoProfileUpdatePage} size="large">
              프로필 수정
            </Button>
          </Stack>
        )}
      </StyledProfileDetailModalFooter>
    </StyledProfileDetailModal>
  );
};

export default ProfileDetailModal;

const StyledProfileDetailModal = styled(Modal)`
  position: relative;
  width: 600px;
  max-height: 580px;
`;

const StyledProfileDetailModalFooter = styled(ModalFooter)`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const StyledUpdateContactButton = styled(Button)`
  width: 180px;
`;

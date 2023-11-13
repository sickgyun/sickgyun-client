import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useUserInformation } from '@/store/UserInformation';

type ProfileSettingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProfileSettingModal = ({ isOpen, onClose }: ProfileSettingModalProps) => {
  const { userInformation } = useUserInformation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>프로필 설정</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="16px">
            <Input value={userInformation.email} placeholder="이메일을 입력해주세요." />
            <Input
              value={userInformation.githubId}
              placeholder="깃허브 아이디를 입력해주세요."
            />
            {userInformation.isGraduate && (
              <Input value={userInformation.company} placeholder="회사를 입력해주세요." />
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button>저장</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileSettingModal;

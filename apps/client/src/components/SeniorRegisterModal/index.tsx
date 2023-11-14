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
  Select,
  Text,
} from '@chakra-ui/react';

type SeniorRegisterModalProps = ModalProps;

const SeniorRegisterModal = ({ isOpen, onClose }: SeniorRegisterModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text as="span">선배 프로필 등록</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="16px">
            <Flex gap="8px">
              <Input placeholder="이름을 입력해주세요." />
              <Input placeholder="깃허브 아이디를 입력해주세요." />
            </Flex>
            <Input placeholder="이메일을 적어주세요." />
            <Input placeholder="소개 말을 적어주세요." />
            <Select size="md">
              <option value="프론트엔드">프론트엔드</option>
              <option value="백엔드">백엔드</option>
              <option value="데브옵스">데브옵스</option>
              <option value="앱">앱</option>
              <option value="디자이너">디자이너</option>
            </Select>
            <Input placeholder="회사명을 입력해주세요." />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button>등록</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SeniorRegisterModal;

import styled from '@emotion/styled';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';

type CoffeechatMessageModalProps = {
  message: string;
} & ModalProps;

const CoffeechatMessageModal = ({
  isOpen,
  onClose,
  message,
}: CoffeechatMessageModalProps) => {
  return (
    <StyledCoffeechatMessageModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h2">커피챗 수락</Text>
          <Text fontType="p2" color="gray600">
            신청자가 커피챗을 요청하면서 보낸 메세지에요!
          </Text>
        </Stack>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <StyledCoffeechatMessageWrapper>
          <Text fontType="p1" color="gray900">
            {message}
          </Text>
        </StyledCoffeechatMessageWrapper>
      </ModalBody>
    </StyledCoffeechatMessageModal>
  );
};

export default CoffeechatMessageModal;

const StyledCoffeechatMessageModal = styled(Modal)`
  width: 500px;
  max-height: 500px;
`;

const StyledCoffeechatMessageWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

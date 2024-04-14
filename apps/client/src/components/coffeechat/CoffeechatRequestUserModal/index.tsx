import styled from '@emotion/styled';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';
import type { Contact } from '@/types/coffeechat';

type CoffeechatRequestUserModalProps = {
  message: string;
  contact?: Contact;
} & ModalProps;

const CoffeechatRequestUserModal = ({
  isOpen,
  onClose,
  message,
  contact,
}: CoffeechatRequestUserModalProps) => {
  return (
    <StyledCoffeechatRequestUserModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h2">커피챗 요청</Text>
          <Text fontType="p2" color="gray600">
            신청자가 커피챗을 요청하면서 보낸 메세지 및 연락처에요!
          </Text>
        </Stack>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <Stack direction="vertical" spacing={16} style={{ width: '100%' }}>
          <StyledCoffeechatRequestUserWrapper>
            <Text fontType="p1" color="gray900">
              {message}
            </Text>
          </StyledCoffeechatRequestUserWrapper>
          {contact?.phoneNumber && (
            <StyledCoffeechatRequestUserWrapper>
              <Text fontType="p1" color="gray900">
                {contact.phoneNumber}
              </Text>
            </StyledCoffeechatRequestUserWrapper>
          )}
          {contact?.instagramId && (
            <StyledCoffeechatRequestUserWrapper>
              <Text fontType="p1" color="gray900">
                {contact.instagramId}
              </Text>
            </StyledCoffeechatRequestUserWrapper>
          )}
          {contact?.kakaoId && (
            <StyledCoffeechatRequestUserWrapper>
              <Text fontType="p1" color="gray900">
                {contact.kakaoId}
              </Text>
            </StyledCoffeechatRequestUserWrapper>
          )}
        </Stack>
      </ModalBody>
    </StyledCoffeechatRequestUserModal>
  );
};

export default CoffeechatRequestUserModal;

const StyledCoffeechatRequestUserModal = styled(Modal)`
  width: 550px;
  max-height: 500px;
`;

const StyledCoffeechatRequestUserWrapper = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

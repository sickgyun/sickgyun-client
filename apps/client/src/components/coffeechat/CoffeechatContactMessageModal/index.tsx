import styled from '@emotion/styled';
import {
  InfoBox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';
import type { Contact } from '@/types/coffeechat';

type CoffeechatContactMessageModalProps = {
  message: string;
  contact?: Contact;
} & ModalProps;

const CoffeechatContactMessageModal = ({
  isOpen,
  onClose,
  message,
  contact,
}: CoffeechatContactMessageModalProps) => {
  return (
    <StyledCoffeechatContactMessageModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h2">커피챗 요청</Text>
          <Text fontType="p2" color="gray600">
            신청자가 커피챗을 요청하면서 보낸 메세지 {contact && '및 연락처'}에요!
          </Text>
        </Stack>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <Stack direction="vertical" spacing={16} style={{ width: '100%' }}>
          <InfoBox label="메세지">{message}</InfoBox>
          {contact?.phoneNumber && (
            <InfoBox label="전화번호">{contact.phoneNumber}</InfoBox>
          )}
          {contact?.instagramId && (
            <InfoBox label="인스타그램 아이디">{contact.instagramId}</InfoBox>
          )}
          {contact?.kakaoId && (
            <InfoBox label="카카오톡 아이디">{contact.kakaoId}</InfoBox>
          )}
        </Stack>
      </ModalBody>
    </StyledCoffeechatContactMessageModal>
  );
};

export default CoffeechatContactMessageModal;

const StyledCoffeechatContactMessageModal = styled(Modal)`
  width: 550px;
  max-height: 550px;
`;

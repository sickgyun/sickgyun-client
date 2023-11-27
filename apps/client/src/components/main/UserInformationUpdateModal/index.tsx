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
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useUpdateUserInformationMutation } from '@/hooks/api/user/useUpdateUserInformationMutation';
import { useUserInformation } from '@/store/UserInformation';

type UserInformationUpdateFormInput = {
  email: string;
  githubId: string;
};

type UserInformationUpdateModalProps = ModalProps;

const UserInformationUpdateModal = ({
  isOpen,
  onClose,
}: UserInformationUpdateModalProps) => {
  const { userInformation } = useUserInformation();
  const { register, handleSubmit: handleUpdateUserInformationSubmit } =
    useForm<UserInformationUpdateFormInput>();

  const { mutate: updateUserInformationMutate } = useUpdateUserInformationMutation();

  const onUpdateUserInformationSubmit: SubmitHandler<UserInformationUpdateFormInput> = (
    data
  ) => {
    const updateUserInformationRequestData = {
      email: data.email,
      githubId: data.githubId,
    };

    updateUserInformationMutate(updateUserInformationRequestData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleUpdateUserInformationSubmit(onUpdateUserInformationSubmit)}
      >
        <ModalHeader>
          <Text as="span">프로필 설정</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="16px">
            <Input
              defaultValue={userInformation.email}
              placeholder="이메일을 입력해주세요."
              {...register('email')}
            />
            <Input
              defaultValue={userInformation.githubId}
              placeholder="깃허브 아이디를 입력해주세요."
              {...register('githubId')}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">저장</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserInformationUpdateModal;

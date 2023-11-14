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
import { useUserInformation } from '@/store/UserInformation';

type UpdateProfileFormInput = {
  email: string;
  githubId: string;
  company?: string;
};

type UpdateProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UpdateProfileModal = ({ isOpen, onClose }: UpdateProfileModalProps) => {
  const { userInformation } = useUserInformation();
  const { register, handleSubmit: handleUpdateProfileSubmit } =
    useForm<UpdateProfileFormInput>();

  const onUpdateProfileSubmit: SubmitHandler<UpdateProfileFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent onSubmit={handleUpdateProfileSubmit(onUpdateProfileSubmit)} as="form">
        <ModalHeader>
          <Text>프로필 설정</Text>
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
            {userInformation.isGraduate && (
              <Input
                defaultValue={userInformation.company}
                placeholder="회사를 입력해주세요."
                {...register('company')}
              />
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">저장</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProfileModal;

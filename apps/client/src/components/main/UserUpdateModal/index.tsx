import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useUserMutation } from '@/hooks/api/user/useUserMutation';
import { useUser } from '@/store/User';

type UserUpdateFormInput = {
  name: string;
  email: string;
};

const UserUpdateModal = ({ isOpen, onClose }: ModalProps) => {
  const { user } = useUser();
  const { register, handleSubmit: handleUpdateUserSubmit } =
    useForm<UserUpdateFormInput>();
  const { mutate: updateUserMutate } = useUserMutation();

  const onUpdateUserSubmit: SubmitHandler<UserUpdateFormInput> = (data) => {
    updateUserMutate(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="500px">
      <ModalContent tag="form" onSubmit={handleUpdateUserSubmit(onUpdateUserSubmit)}>
        <ModalHeader>
          <Text fontType="h2">프로필 설정</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <Stack direction="vertical" spacing={16} style={{ width: '100%' }}>
            <Input
              label="이름"
              defaultValue={user.name}
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
            <Input
              label="이메일"
              defaultValue={user.email}
              placeholder="이메일을 입력해주세요."
              {...register('email')}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">저장</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserUpdateModal;

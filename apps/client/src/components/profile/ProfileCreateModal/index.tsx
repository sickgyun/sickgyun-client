import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import ProfileForm from '../ProfileForm';
import type { CreateProfileRequest } from '@/hooks/api/profile/useCreateProfile';
import { useCreateProfile } from '@/hooks/api/profile/useCreateProfile';
import { useUser } from '@/hooks/common/useUser';

const ProfileCreateModal = ({ isOpen, onClose }: ModalProps) => {
  const user = useUser();
  const { register, handleSubmit: handleCreateProfileSubmit } =
    useForm<CreateProfileRequest>();
  const { mutate: createProfileMutate } = useCreateProfile();

  const onCreateProfile: SubmitHandler<CreateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };

    createProfileMutate(profile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="550px" height="600px">
      <ModalContent tag="form" onSubmit={handleCreateProfileSubmit(onCreateProfile)}>
        <ModalHeader>
          <Text fontType="h2">프로필 등록</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <ProfileForm user={user} register={register} />
        </ModalBody>
        <ModalFooter>
          <Button type="submit">등록</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileCreateModal;

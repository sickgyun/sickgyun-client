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
import { useGetProfileMine } from '@/hooks/api/profile/useGetProfileMine';
import type { UpdateProfileRequest } from '@/hooks/api/profile/useUpdateProfile';
import { useUpdateProfile } from '@/hooks/api/profile/useUpdateProfile';
import { useUser } from '@/hooks/common/useUser';

const ProfileUpdateModal = ({ isOpen, onClose }: ModalProps) => {
  const user = useUser();
  const { profileMine } = useGetProfileMine();
  const { register, handleSubmit: handleUpdateProfileSubmit } =
    useForm<UpdateProfileRequest>();
  const { mutate: updateProfileMutate } = useUpdateProfile();

  const onUpdateProfile: SubmitHandler<UpdateProfileRequest> = (data) => {
    const profile = { isGraduated: user.isGraduated, ...data };

    updateProfileMutate(profile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="550px" height="600px">
      <ModalContent tag="form" onSubmit={handleUpdateProfileSubmit(onUpdateProfile)}>
        <ModalHeader>
          <Text fontType="h2">프로필 수정</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <ProfileForm user={user} defaultValues={profileMine} register={register} />
        </ModalBody>
        <ModalFooter>
          <Button type="submit">수정</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileUpdateModal;

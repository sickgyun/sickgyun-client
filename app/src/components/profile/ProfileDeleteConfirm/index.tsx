import { Confirm } from '@sickgyun/ui';
import { useDeleteProfile } from '@/hooks/api/profile/useDeleteProfileMine';

type ProfileDeleteConfirmProps = {
  onProfileDetailModalClose: VoidFunction;
} & ModalProps;

const ProfileDeleteConfirm = ({
  isOpen,
  onClose,
  onProfileDetailModalClose,
}: ProfileDeleteConfirmProps) => {
  const { mutate: deleteProfileMutate } = useDeleteProfile();

  const handleProfileMineDelete = () => {
    deleteProfileMutate();
    onClose();
    onProfileDetailModalClose();
  };

  return (
    <Confirm
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleProfileMineDelete}
      title="프로필 삭제"
      description="정말 프로필을 삭제 하시겠습니까?"
      confirmButtonText="삭제"
    />
  );
};

export default ProfileDeleteConfirm;

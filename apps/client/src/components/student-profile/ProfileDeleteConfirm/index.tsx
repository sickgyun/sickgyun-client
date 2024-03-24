import { Confirm } from '@sickgyun/ui';

type ProfileDeleteConfirmProps = {
  onDelete: VoidFunction;
} & ModalProps;

const ProfileDeleteConfirm = ({
  isOpen,
  onClose,
  onDelete,
}: ProfileDeleteConfirmProps) => {
  return (
    <Confirm
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onDelete}
      title="프로필 삭제"
      description="정말 프로필을 삭제 하시겠습니까?"
      confirmButtonText="삭제"
    />
  );
};

export default ProfileDeleteConfirm;

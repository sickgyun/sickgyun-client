import { Confirm } from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useDeleteProfile } from '@/hooks/api/profile/useDeleteProfileMine';
import { PROFILE_LIST_QUERY_KEY } from '@/hooks/api/profile/useGetProfileList';
import { PROFILE_MINE_QUERY_KEY } from '@/hooks/api/profile/useGetProfileMine';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import { useLogAnalyticsEvent } from '@/libs/logging';

type ProfileDeleteConfirmProps = {
  onProfileDetailModalClose: VoidFunction;
} & ModalProps;

const ProfileDeleteConfirm = ({
  isOpen,
  onClose,
  onProfileDetailModalClose,
}: ProfileDeleteConfirmProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { logClickEvent } = useLogAnalyticsEvent();

  const { mutate: deleteProfileMutate } = useDeleteProfile({
    onSuccess: () => {
      logClickEvent({ name: 'click_delete_profile_mine' });
      queryClient.invalidateQueries({ queryKey: [PROFILE_LIST_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [PROFILE_MINE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      router.replace('/profile');
    },
  });

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

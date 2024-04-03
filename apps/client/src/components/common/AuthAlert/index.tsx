import { Alert } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';

type AuthAlertProps = ModalProps;

const AuthAlert = ({ isOpen, onClose }: AuthAlertProps) => {
  const router = useRouter();

  const handleConfirm = () => {
    onClose();
    router.replace('/');
  };

  return (
    <Alert
      isOpen={isOpen}
      title="로그인 필요"
      description="로그인 후에 편리하게 서비스를 이용하실 수 있습니다."
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default AuthAlert;

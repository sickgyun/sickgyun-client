import { colors } from '@sickgyun/design-token';
import { CloseIcon } from '../Icons';

type ModalCloseButtonProps = {
  onClose: VoidFunction;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <CloseIcon
      onClick={onClose}
      width={36}
      height={36}
      cursor="pointer"
      color={colors.black}
      style={{ position: 'absolute', right: 0 }}
    />
  );
};

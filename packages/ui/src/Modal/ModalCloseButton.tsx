import { IconCloseFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';

type ModalCloseButtonProps = {
  onClose: VoidFunction;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <IconCloseFill
      onClick={onClose}
      width={36}
      height={36}
      cursor="pointer"
      color={colors.black}
      style={{ position: 'absolute', right: 0 }}
    />
  );
};

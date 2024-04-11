import { IconCloseFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import type { HTMLAttributes } from 'react';

type ModalCloseButtonProps = {
  onClose: VoidFunction;
} & HTMLAttributes<HTMLDivElement>;

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <IconCloseFill
      onClick={onClose}
      width={28}
      height={28}
      cursor="pointer"
      color={colors.gray900}
      style={{ position: 'absolute', right: 0, top: 0 }}
    />
  );
};

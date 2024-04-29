import { IconCloseFill } from '@seed-design/icon';
import { colors } from '@sickgyun/design-token';
import { type Ref, type SVGAttributes, forwardRef } from 'react';

type ModalCloseButtonProps = {
  onClose: VoidFunction;
} & SVGAttributes<SVGSVGElement>;

export const ModalCloseButton = (
  { onClose }: ModalCloseButtonProps,
  ref: Ref<SVGSVGElement>
) => {
  return (
    <IconCloseFill
      ref={ref}
      onClick={onClose}
      width={28}
      height={28}
      cursor="pointer"
      color={colors.gray900}
      style={{ position: 'absolute', right: 0, top: 0 }}
    />
  );
};

const ForwardRef = forwardRef(ModalCloseButton);
export default ForwardRef;

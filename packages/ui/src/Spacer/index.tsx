import { isNumber } from 'lodash';

interface SpacerProps {
  width?: number;
  height?: number;
}

export const Spacer = ({ width, height }: SpacerProps) => {
  return (
    <div
      style={{
        width: isNumber(width) ? `${width}px` : '100%',
        height: isNumber(height) ? `${height}px` : '100%',
      }}
    />
  );
};

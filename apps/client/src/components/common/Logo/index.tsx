import type { HTMLAttributes } from 'react';

type LogoProps = {
  width: number;
  height: number;
} & HTMLAttributes<HTMLDivElement>;

const Logo = ({ width, height, ...props }: LogoProps) => {
  return (
    <img
      src="/assets/svgs/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Logo;

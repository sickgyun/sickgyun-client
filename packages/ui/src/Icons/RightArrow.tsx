import { type SVGProps } from 'react';

export const RightArrowIcon = ({
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 77" {...props}>
      <path
        d="M49.4,39.8L33.3,55.9c-0.8,0.8-2,0.8-2.8,0s-0.8-2,0-2.8l14.7-14.7L29.7,22.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0L49.4,37C50.2,37.8,50.2,39,49.4,39.8z M76,38c0,21-17,38-38,38S0,59,0,38S17,0,38,0S76,17,76,38z M72,38C72,19.2,56.8,4,38,4S4,19.2,4,38s15.2,34,34,34S72,56.8,72,38z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowIcon;

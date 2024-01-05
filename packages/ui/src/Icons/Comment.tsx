import { type SVGProps } from 'react';

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 3a5 5 0 0 0-4.404 7.37.667.667 0 0 1 .063.463l-.436 1.924 1.843-.46a.667.667 0 0 1 .488.065A5 5 0 1 0 8 3ZM1.667 8a6.333 6.333 0 1 1 3.473 5.652l-2.645.661a.667.667 0 0 1-.812-.794l.623-2.744A6.31 6.31 0 0 1 1.667 8Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

'use client';

import { RecoilRoot } from 'recoil';

const Template = ({ children }: StrictPropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Template;

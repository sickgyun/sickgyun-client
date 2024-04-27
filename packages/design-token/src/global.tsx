import { Global, css } from '@emotion/react';
import { colors } from './themes/colors';
import { FontCSS, ResetCSS } from '.';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: WantedSansVariable;
    color: ${colors.gray900};
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={ResetCSS} />
      <Global styles={FontCSS} />
      <Global styles={globalStyle} />
    </>
  );
};

import { Global, css } from '@emotion/react';
import { colors } from './themes';
import { FontCSS, ResetCSS } from '.';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${colors.gray900};
    font-weight: normal;
    font-family: WantedSansVariable;
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

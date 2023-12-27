import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

type ModalHeaderProps = PropsWithChildren<{ hasContent: boolean }>;

export const ModalHeader = ({ children, hasContent }: ModalHeaderProps) => {
  return <StyledModalHeader hasContent={hasContent}>{children}</StyledModalHeader>;
};

const StyledModalHeader = styled.div<{ hasContent: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: 20px;
  ${({ theme, hasContent }) => css`
    border-bottom: 1px solid ${hasContent && theme.colors.gray200};
  `}
`;

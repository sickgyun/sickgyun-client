import { css } from '@emotion/react';
import styled from '@emotion/styled';

type SelectOption = {
  name: string;
  value: any;
};

type SwitchProps = {
  value: any;
  onChange: (value: any) => void;
  options: SelectOption[];
};

export const Switch = ({ options, value, onChange }: SwitchProps) => {
  return (
    <StyledSwitch>
      {options.map((option, index) => (
        <>
          {index !== 0 && <StyledDividingLine />}
          <StyledSwitchButton
            key={index}
            isFirst={index === 0}
            isLast={index === options.length - 1}
            isActive={option.value === value}
            onClick={() => onChange(option.value)}
          >
            {option.name}
          </StyledSwitchButton>
        </>
      ))}
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 8px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray300};
  `}
`;

const StyledSwitchButton = styled.button<{
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 19px;
  min-width: 80px;
  height: 100%;

  ${({ isActive, isFirst, isLast, theme }) => css`
    ${theme.fonts.body1}
    color: ${theme.colors.gray600};
    background-color: ${theme.colors.white};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.gray100};
    }

    ${isActive &&
    css`
      color: ${theme.colors.primary};
    `}

    ${isFirst &&
    css`
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    `}

    ${isLast &&
    css`
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
  `}
`;

const StyledDividingLine = styled.div`
  width: 1px;
  height: 20px;
  border-radius: 0.5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray300};
  `}
`;

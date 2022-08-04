import styled, { css } from 'styled-components';

type StyledButtonProps = {
  buttonType?: 'primary' | 'secondary';
};

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: black;
  color: white;
  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      background-color: white;
      color: black;
    `}
`;

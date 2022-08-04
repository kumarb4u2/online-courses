import React from 'react';
import { StyledButton } from './styledcomponents/Button';
import { StyledContainer } from './styledcomponents/Container';

export const Header: React.FC = () => {
  return (
    <div>
      <StyledContainer>
        <StyledButton>kumar</StyledButton>
        <StyledButton buttonType="secondary">lalit</StyledButton>
      </StyledContainer>
    </div>
  );
};

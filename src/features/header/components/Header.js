import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 40px;
  padding: 0 20px;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundPrimary};
  border-bottom: 2px solid ${props => props.theme.borderColor};
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  line-height: 32px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: Roboto;
  cursor: pointer;
  background-color: ${props => props.theme.link};
`;

function Header() {
  return (
    <StyledHeader>
      <Button>Share</Button>
    </StyledHeader>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #3f3f3f;
  background-color: #f5f5f5;
  min-height: 40px;
  border-bottom: 2px solid #e4e4e4;
  padding: 0 20px;
`;

const Button = styled.button`
  background-color: #2680eb;
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
`;

function Header() {
  return (
    <StyledHeader>
      <Button>Share</Button>
    </StyledHeader>
  );
}

export default Header;

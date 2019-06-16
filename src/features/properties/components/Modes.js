import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledModes = styled.header`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.8rem;
  padding: 8px;
  line-height: 40px;
  color: ${props => props.theme.secondary};
  &:first-child {
    padding-left: 16px;
  }
  &:hover {
    color: ${props => props.theme.primary};
  }
  &.active {
    color: ${props => props.theme.primary};
  }
`;

function Modes() {
  return (
    <StyledModes>
      <StyledNavLink exact to="/">
        Design
      </StyledNavLink>
      <StyledNavLink to="/code">Code</StyledNavLink>
    </StyledModes>
  );
}

export default Modes;

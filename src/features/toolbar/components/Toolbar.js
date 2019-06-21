import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Plus from "../styles/icons/Plus";
import ShoppingBag from "../styles/icons/ShoppingBag";
import Theme from "./Theme";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  transition: ${props => props.theme.backgroundColorTransition};
  border-bottom: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: initial;
    border-bottom: initial;
    border-right: ${props =>
      `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  margin-right: 24px;
  color: ${props => props.theme.primary};
  &.active {
    color: ${props => props.theme.brand};
  }
  @media (min-width: 768px) {
    margin-right: initial;
    margin-bottom: 24px;
  }
`;

function Toolbar(props) {
  return (
    <StyledToolbar>
      <StyledNavLink exact to="/">
        <Plus size={16} />
      </StyledNavLink>
      <StyledNavLink to="/store">
        <ShoppingBag size={16} />
      </StyledNavLink>
      <Theme />
    </StyledToolbar>
  );
}

export default Toolbar;

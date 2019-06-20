import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Theme from "./Theme";
import ShoppingBag from "../styles/icons/ShoppingBag";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  background-color: ${props => props.theme.backgroundPrimary};
  transition: ${props => props.theme.backgroundColorTransition};
  border-right: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-left: 24px;
  color: ${props => props.theme.primary};
  @media (min-width: 768px) {
    margin-top: 24px;
    margin-left: initial;
  }
`;

function Toolbar(props) {
  return (
    <StyledToolbar>
      <Theme />
      <StyledLink to="/store">
        <ShoppingBag size={16} />
      </StyledLink>
    </StyledToolbar>
  );
}

export default Toolbar;

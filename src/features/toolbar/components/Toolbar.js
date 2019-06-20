import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Theme from "./Theme";
import ShoppingBag from "../styles/icons/ShoppingBag";

const StyledToolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  background-color: ${props => props.theme.backgroundPrimary};
  transition: ${props => props.theme.backgroundColorTransition};
  border-right: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

const StyledLink = styled(Link)`
  margin-top: 24px;
  color: ${props => props.theme.primary};
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

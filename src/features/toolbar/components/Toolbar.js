import React from "react";
import styled from "styled-components";

import Theme from "./Theme";

const StyledToolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  background-color: ${props => props.theme.backgroundPrimary};
  border-right: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

function Toolbar(props) {
  return (
    <StyledToolbar>
      <Theme />
    </StyledToolbar>
  );
}

export default Toolbar;

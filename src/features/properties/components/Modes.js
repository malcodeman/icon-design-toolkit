import React from "react";
import styled from "styled-components";

const StyledModes = styled.header`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 0.8rem;
  padding: 10px;
  line-height: 40px;
  cursor: default;
  &:hover {
    color: ${props => props.theme.primary};
  }
  color: ${props =>
    props.active ? props.theme.primary : props.theme.secondary};
`;

function Modes(props) {
  return (
    <StyledModes>
      <Text active={!props.showCode} onClick={() => props.setShowCode(false)}>
        Design
      </Text>
      <Text active={props.showCode} onClick={() => props.setShowCode(true)}>
        Code
      </Text>
    </StyledModes>
  );
}

export default Modes;

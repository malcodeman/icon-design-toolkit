import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";

import Minus from "../styles/icons/Minus";
import Plus from "../styles/icons/Plus";

const StyledPanelTitle = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.theme.backgroundInput};
`;

const PanelTitleText = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${props => props.theme.primary};
`;

function PanelTitle(props) {
  return (
    <StyledPanelTitle>
      <PanelTitleText>{props.title}</PanelTitleText>
      {props.expanded ? (
        <Minus
          size={12}
          color={props.theme.primary}
          onClick={() => props.setExpanded(false)}
        />
      ) : (
        <Plus
          size={12}
          color={props.theme.primary}
          onClick={() => props.setExpanded(true)}
        />
      )}
    </StyledPanelTitle>
  );
}

PanelTitle.propTypes = {
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func.isRequired
};

PanelTitle.defaultProps = {
  expanded: false
};

export default withTheme(PanelTitle);

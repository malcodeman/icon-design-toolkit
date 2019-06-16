import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  Panel,
  PanelTitle,
  PanelTitleText,
  PanelBody,
  Control,
  ControlInput
} from "../styles/propertiesStyles";

const ColorWrapper = styled.div`
  width: 36px;
  height: 24px;
  padding: 4px;
  border-radius: ${props => props.theme.borderRadius};
  border: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

const Color = styled.div`
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease;
  background-color: ${props => props.color};
`;

function Fill(props) {
  function handleOnFocus(e) {
    e.target.select();
  }

  function handleOnChange(value, set) {
    set(value);
  }

  return (
    <Panel>
      <PanelTitle>
        <PanelTitleText>Fill</PanelTitleText>
      </PanelTitle>
      <PanelBody>
        <Control>
          <ColorWrapper>
            <Color color={props.color} />
          </ColorWrapper>
          <ControlInput
            type="text"
            value={props.color}
            onFocus={handleOnFocus}
            onChange={e =>
              handleOnChange(e.currentTarget.value, props.setColor)
            }
          />
        </Control>
      </PanelBody>
    </Panel>
  );
}

Fill.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired
};

export default Fill;

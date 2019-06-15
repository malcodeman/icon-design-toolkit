import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  Panel,
  PanelTitle,
  Control,
  ControlInput
} from "../styles/propertiesStyles";

const Wrapper = styled.div``;

const Color = styled.div`
  min-width: 16px;
  height: 16px;
  margin-right: 8px;
  background-color: ${props => props.color};
  border-radius: ${props => props.theme.borderRadius};
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
      <PanelTitle>Fill</PanelTitle>
      <Wrapper>
        <Control>
          <Color color={props.color} />
          <ControlInput
            type="text"
            value={props.color}
            onFocus={handleOnFocus}
            onChange={e =>
              handleOnChange(e.currentTarget.value, props.setColor)
            }
          />
        </Control>
      </Wrapper>
    </Panel>
  );
}

Fill.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired
};

export default Fill;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  Panel,
  Control,
  ControlLabel,
  ControlInput
} from "../styles/propertiesStyles";

const Controls = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function Dimensions(props) {
  function handleOnFocus(e) {
    e.target.select();
  }

  function handleOnChange(value, set) {
    if (isNaN(value) === false && isFinite(value)) {
      set(Number(value));
    }
  }

  return (
    <Panel>
      <Controls>
        <Control>
          <ControlLabel>W</ControlLabel>
          <ControlInput
            type="text"
            value={props.width}
            onFocus={handleOnFocus}
            onChange={e =>
              handleOnChange(e.currentTarget.value, props.setWidth)
            }
          />
        </Control>
        <Control>
          <ControlLabel>H</ControlLabel>
          <ControlInput
            type="text"
            value={props.height}
            onFocus={handleOnFocus}
            onChange={e =>
              handleOnChange(e.currentTarget.value, props.setHeight)
            }
          />
        </Control>
      </Controls>
    </Panel>
  );
}

Dimensions.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired
};

export default Dimensions;

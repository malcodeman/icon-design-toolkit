import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
  ControlInput
} from "../styles/propertiesStyles";

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
      <PanelBody>
        <Control>
          <ControlLabel>Width</ControlLabel>
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
          <ControlLabel>Height</ControlLabel>
          <ControlInput
            type="text"
            value={props.height}
            onFocus={handleOnFocus}
            onChange={e =>
              handleOnChange(e.currentTarget.value, props.setHeight)
            }
          />
        </Control>
      </PanelBody>
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

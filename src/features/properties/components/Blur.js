import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelBody,
  Control,
  ControlLabel
} from "../styles/propertiesStyles";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

function Blur(props) {
  const [expanded, setExpanded] = useState(true);

  function handleOnChange(value) {
    const number = Number(value);

    if (number < 0 || isNaN(number) || number.toString().length > 4) {
      return;
    }
    props.setBlur(number);
  }

  return (
    <Panel>
      <PanelTitle title="Blur" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <ControlLabel>Amount</ControlLabel>
            <Input
              type="text"
              value={props.blur}
              handleSetValue={handleOnChange}
              operators
            />
          </Control>
        </PanelBody>
      )}
    </Panel>
  );
}

Blur.propTypes = {
  blur: PropTypes.number.isRequired,
  setBlur: PropTypes.func.isRequired
};

export default Blur;

import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
  ControlInput
} from "../styles/propertiesStyles";
import PanelTitle from "./PanelTitle";

function Blur(props) {
  const [expanded, setExpanded] = useState(true);

  function handleOnFocus(e) {
    e.target.select();
  }

  return (
    <Panel>
      <PanelTitle title="Blur" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <ControlLabel>Amount</ControlLabel>
            <ControlInput
              type="text"
              value={props.blur}
              onFocus={handleOnFocus}
              onChange={e => props.setBlur(e.currentTarget.value)}
            />
          </Control>
        </PanelBody>
      )}
    </Panel>
  );
}

Blur.propTypes = {
  blur: PropTypes.string.isRequired,
  setBlur: PropTypes.func.isRequired
};

export default Blur;

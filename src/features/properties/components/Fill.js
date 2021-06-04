import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

import { Panel, PanelBody } from "../styles/propertiesStyles";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

const StyledHexColorPicker = styled(HexColorPicker)`
  margin-bottom: 10px;
`;

const Control = styled.div`
  padding: 0 10px;
  :not(:last-child) {
    margin-bottom: ${(props) =>
      props.marginBottom ? props.marginBottom : "10px"};
  }
`;

function Fill(props) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Panel>
      <PanelTitle title="Fill" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <StyledHexColorPicker
              color={props.color}
              onChange={props.setColor}
            />
            <Input
              type="text"
              value={props.color}
              handleSetValue={props.setColor}
            />
          </Control>
        </PanelBody>
      )}
    </Panel>
  );
}

Fill.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default Fill;

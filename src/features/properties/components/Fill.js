import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Panel, PanelBody, Control } from "../styles/propertiesStyles";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

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
  const [expanded, setExpanded] = useState(true);

  return (
    <Panel>
      <PanelTitle title="Fill" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <ColorWrapper>
              <Color color={props.color} />
            </ColorWrapper>
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
  setColor: PropTypes.func.isRequired
};

export default Fill;

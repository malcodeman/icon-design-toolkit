import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
  ControlInput
} from "../styles/propertiesStyles";
import Lock from "../styles/icons/Lock";

const LockGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LockWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
  color: ${props => (props.active ? props.theme.brand : props.theme.primary)};
`;

const BorderTop = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-top-left-radius: ${props => props.theme.borderRadius};
  border-top: ${props => `1px solid ${props.theme.secondary};`};
  border-left: ${props => `1px solid ${props.theme.secondary};`};
`;

const BorderBottom = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  border-left: ${props => `1px solid ${props.theme.secondary};`};
  border-bottom: ${props => `1px solid ${props.theme.secondary};`};
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Dimensions(props) {
  const [constrainProportions, setConstrainProportions] = useState(true);

  function handleOnFocus(e) {
    e.target.select();
  }

  function handleSetWidth(value) {
    const { setWidth, width } = props;

    if (!value || isNaN(value) || value.toString().length > 4) {
      return;
    }
    if (constrainProportions) {
      const { height, setHeight } = props;
      const adjustedHeight = (value * height) / width;

      setWidth(value);
      setHeight(adjustedHeight);
    } else {
      setWidth(value);
    }
  }

  function handleSetHeight(value) {
    const { setHeight, height } = props;

    if (!value || isNaN(value) || value.toString().length > 4) {
      return;
    }
    if (constrainProportions) {
      const { width, setWidth } = props;
      const adjustedWidth = (value * width) / height;

      setHeight(value);
      setWidth(adjustedWidth);
    } else {
      setHeight(value);
    }
  }

  function handleToggleConstrains() {
    const state = constrainProportions ? false : true;

    setConstrainProportions(state);
  }

  return (
    <Panel>
      <PanelBody>
        <Control marginBottom={"0"}>
          <LabelWrapper>
            <ControlLabel>Width</ControlLabel>
            <BorderTop />
          </LabelWrapper>
          <ControlInput
            type="text"
            value={props.width}
            onFocus={handleOnFocus}
            onChange={e => handleSetWidth(Number(e.currentTarget.value))}
          />
        </Control>
        <LockGrid>
          <LockWrapper
            active={constrainProportions}
            onClick={handleToggleConstrains}
          >
            <Lock size={10} />
          </LockWrapper>
        </LockGrid>
        <Control>
          <LabelWrapper>
            <ControlLabel>Height</ControlLabel>
            <BorderBottom />
          </LabelWrapper>
          <ControlInput
            type="text"
            value={props.height}
            onFocus={handleOnFocus}
            onChange={e => handleSetHeight(Number(e.currentTarget.value))}
          />
        </Control>
        <Control>
          <ControlLabel>Opacity</ControlLabel>
          <ControlInput
            type="text"
            value={props.opacity}
            onFocus={handleOnFocus}
            onChange={e => props.setOpacity(e.currentTarget.value)}
          />
        </Control>
        <Control>
          <ControlLabel>Rotation</ControlLabel>
          <ControlInput
            type="text"
            value={props.rotation}
            onFocus={handleOnFocus}
            onChange={e => props.setRotation(e.currentTarget.value)}
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

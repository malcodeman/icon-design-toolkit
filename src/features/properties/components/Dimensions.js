import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Lock } from "react-feather";

import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
} from "../styles/propertiesStyles";
import Input from "./Input";

const LockGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LockWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
  color: ${(props) => (props.active ? props.theme.brand : props.theme.primary)};
`;

const BorderTop = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top: ${(props) => `1px solid ${props.theme.secondary};`};
  border-left: ${(props) => `1px solid ${props.theme.secondary};`};
`;

const BorderBottom = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-left: ${(props) => `1px solid ${props.theme.secondary};`};
  border-bottom: ${(props) => `1px solid ${props.theme.secondary};`};
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Dimensions(props) {
  const [constrainProportions, setConstrainProportions] = useState(true);

  function handleSetWidth(value) {
    const { setWidth, width } = props;
    const number = Number(value);

    if (!number || isNaN(number) || number.toString().length > 4) {
      return;
    }
    if (constrainProportions) {
      const { height, setHeight } = props;
      const adjustedHeight = (number * height) / width;

      setWidth(number);
      setHeight(adjustedHeight);
    } else {
      setWidth(number);
    }
  }

  function handleSetHeight(value) {
    const { setHeight, height } = props;
    const number = Number(value);

    if (!number || isNaN(number) || number.toString().length > 4) {
      return;
    }
    if (constrainProportions) {
      const { width, setWidth } = props;
      const adjustedWidth = (number * width) / height;

      setHeight(number);
      setWidth(adjustedWidth);
    } else {
      setHeight(number);
    }
  }

  function handleSetRotation(value) {
    const number = Number(value);

    if (isNaN(number) || number > 360) {
      return;
    }
    props.setRotation(number);
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
          <Input
            value={props.width}
            handleSetValue={handleSetWidth}
            operators
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
          <Input
            value={props.height}
            handleSetValue={handleSetHeight}
            operators
          />
        </Control>
        <Control>
          <ControlLabel>Opacity</ControlLabel>
          <Input value={props.opacity} handleSetValue={props.setOpacity} />
        </Control>
        <Control>
          <ControlLabel>Rotation</ControlLabel>
          <Input
            value={props.rotation}
            handleSetValue={handleSetRotation}
            operators
          />
        </Control>
      </PanelBody>
    </Panel>
  );
}

Dimensions.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  setOpacity: PropTypes.func.isRequired,
  setRotation: PropTypes.func.isRequired,
};

export default Dimensions;

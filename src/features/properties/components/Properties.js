import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setWidth, setHeight } from "../actions/propertiesActionCreators";

const PropertiesPanel = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  bottom: 0;
  display: flex;
  width: 246px;
  flex-direction: column;
  border-left: 2px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Panel = styled.div`
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme.borderColor};
`;

const PanelTitle = styled.h2`
  font-size: 0.6rem;
  font-weight: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
`;

const Controls = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const ControlLabel = styled.label`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  cursor: ew-resize;
  color: ${props => props.theme.secondary};
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    border-color: ${props => props.theme.borderColor};
  }
  &:focus-within {
    border-color: ${props => props.theme.brand};
    box-shadow: inset 0 0 0 1px ${props => props.theme.brand};
  }
  &:focus-within ${ControlLabel} {
    color: ${props => props.theme.brand};
  }
`;

const ControlInput = styled.input`
  font-size: 0.8rem;
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: default;
  &:focus {
    color: ${props => props.theme.brand};
  }
`;

function Properties(props) {
  function handleOnFocus(e) {
    e.target.select();
  }

  function handleOnChange(value, set) {
    if (isNaN(value) === false && isFinite(value)) {
      set(Number(value));
    }
  }

  return (
    <PropertiesPanel>
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
      <Panel>
        <PanelTitle>Appearance</PanelTitle>
      </Panel>
    </PropertiesPanel>
  );
}

const mapStateToProps = state => {
  return {
    color: state.properties.color,
    width: state.properties.width,
    height: state.properties.height
  };
};

export default connect(
  mapStateToProps,
  { setWidth, setHeight }
)(Properties);

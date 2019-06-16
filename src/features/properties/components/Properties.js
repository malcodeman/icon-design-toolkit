import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

import {
  setWidth,
  setHeight,
  setColor
} from "../actions/propertiesActionCreators";
import Modes from "./Modes";
import Dimensions from "./Dimensions";
import Fill from "./Fill";
import Code from "./Code";

const PropertiesPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 222px;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => props.theme.backgroundPrimary};
  border-left: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

function Properties(props) {
  function renderDesignMode() {
    return (
      <>
        <Dimensions
          width={props.width}
          height={props.height}
          setWidth={props.setWidth}
          setHeight={props.setHeight}
        />
        <Fill color={props.color} setColor={props.setColor} />
      </>
    );
  }

  function renderCodeMode() {
    return (
      <Code width={props.width} height={props.height} color={props.color} />
    );
  }

  return (
    <PropertiesPanel>
      <Modes />
      <Route exact path="/" render={() => renderDesignMode()} />
      <Route path="/code" render={() => renderCodeMode()} />
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
  { setWidth, setHeight, setColor }
)(Properties);

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
  top: 40px;
  right: 0;
  bottom: 0;
  display: flex;
  width: 246px;
  flex-direction: column;
  border-left: 2px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundPrimary};
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

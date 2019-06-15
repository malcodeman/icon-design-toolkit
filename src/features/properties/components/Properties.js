import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  setWidth,
  setHeight,
  setColor
} from "../actions/propertiesActionCreators";
import Dimensions from "./Dimensions";
import Fill from "./Fill";

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
  return (
    <PropertiesPanel>
      <Dimensions
        width={props.width}
        height={props.height}
        setWidth={props.setWidth}
        setHeight={props.setHeight}
      />
      <Fill color={props.color} setColor={props.setColor} />
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

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import GitHub from "../styles/icons/Github";

const StyledCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: ${props => props.theme.backgroundCanvas};
`;

function Canvas(props) {
  return (
    <StyledCanvas>
      <GitHub
        width={props.width}
        height={props.height}
        color={props.color}
        opacity={props.opacity}
        rotation={props.rotation}
        blur={props.blur}
      />
    </StyledCanvas>
  );
}

const mapStateToProps = state => {
  return {
    color: state.properties.color,
    width: state.properties.width,
    height: state.properties.height,
    opacity: state.properties.opacity,
    rotation: state.properties.rotation,
    blur: state.properties.blur
  };
};

export default connect(
  mapStateToProps,
  null
)(Canvas);

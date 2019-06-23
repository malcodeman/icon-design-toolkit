import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import featherIcons from "../../store/icons/feather";

const StyledCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: ${props => props.theme.backgroundCanvas};
  transition: ${props => props.theme.backgroundColorTransition};
`;

function Canvas(props) {
  const { iconId } = props;
  const icon = featherIcons.find(icon => icon.id === iconId);
  const iconProps = {
    color: props.color,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    transform: `rotate(${props.rotation})`,
    filter: `blur(${props.blur}px)`,
    style: { transition: "all 0.2s ease" }
  };
  const element = React.cloneElement(icon.component, iconProps);

  return <StyledCanvas>{element}</StyledCanvas>;
}

const mapStateToProps = state => {
  return {
    iconId: state.canvas.iconId,
    color: state.properties.color,
    width: state.properties.width,
    height: state.properties.height,
    opacity: state.properties.opacity,
    rotation: state.properties.rotation,
    blur: state.properties.blur
  };
};

Canvas.propTypes = {
  iconId: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Canvas);

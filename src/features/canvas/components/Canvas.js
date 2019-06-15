import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import GitHub from "../styles/icons/Github";

const StyledCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 246px);
  min-height: calc(100vh - 40px);
`;

function Canvas(props) {
  return (
    <StyledCanvas>
      <GitHub width={props.width} height={props.height} color={props.color} />
    </StyledCanvas>
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
  null
)(Canvas);

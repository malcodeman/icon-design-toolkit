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
      <GitHub size={props.size} color={props.color} />
    </StyledCanvas>
  );
}

const mapStateToProps = state => {
  return {
    color: state.properties.color,
    size: state.properties.size
  };
};

export default connect(
  mapStateToProps,
  null
)(Canvas);

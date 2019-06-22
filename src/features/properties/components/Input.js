import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChevronUp from "../styles/icons/ChevronUp";
import ChevronDown from "../styles/icons/ChevronDown";

const Operators = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  height: 100%;
  visibility: hidden;
  justify-content: space-between;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundInput};
  border-left: ${props => `1px solid ${props.theme.borderColor};`};
`;

const ControlInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 24px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundInput};
  border: ${props => `1px solid ${props.theme.borderColor};`};
  &:hover ${Operators} {
    visibility: visible;
  }
  &:focus-within {
    border-color: ${props => props.theme.brand};
  }
`;

const ControlInput = styled.input`
  font-size: 0.8rem;
  width: 100%;
  height: 100%;
  cursor: default;
  border: 0;
  padding: 0 4px;
  font-family: "Roboto", sans-serif;
  background-color: transparent;
  color: ${props => props.theme.primary};
`;

function Input(props) {
  const { value, handleSetValue, operators } = props;

  function handleOnFocus(e) {
    e.target.select();
  }

  return (
    <ControlInputWrapper>
      <ControlInput
        type="text"
        value={value}
        onFocus={handleOnFocus}
        onChange={e => handleSetValue(e.currentTarget.value)}
      />
      {operators && (
        <Operators>
          <ChevronUp size={10} onClick={() => handleSetValue(value + 1)} />
          <ChevronDown size={10} onClick={() => handleSetValue(value - 1)} />
        </Operators>
      )}
    </ControlInputWrapper>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleSetValue: PropTypes.func.isRequired,
  operators: PropTypes.bool
};

Input.defaultProps = {
  operators: false
};

export default Input;

import styled from "styled-components";

export const Panel = styled.div`
  padding: 8px;
  border-bottom: 2px solid ${props => props.theme.borderColor};
`;

export const PanelTitle = styled.h2`
  line-height: 32px;
  padding-left: 8px;
  font-size: 0.6rem;
  font-weight: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
`;

export const ControlLabel = styled.label`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  cursor: ew-resize;
  color: ${props => props.theme.secondary};
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 8px;
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

export const ControlInput = styled.input`
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

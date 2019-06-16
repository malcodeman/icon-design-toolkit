import styled from "styled-components";

export const Panel = styled.div`
  border-bottom: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

export const PanelTitle = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

export const PanelTitleText = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${props => props.theme.primary};
`;

export const PanelBody = styled.div`
  padding: 0 0 10px 0;
  :not(:first-child) {
    padding: 10px 0;
  }
`;

export const Control = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ControlLabel = styled.label`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

export const ControlInput = styled.input`
  font-size: 0.8rem;
  background-color: #fff;
  padding: 4px;
  width: 100%;
  cursor: default;
  height: 24px;
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  border: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
  &:focus {
    color: ${props => props.theme.brand};
    border-color: ${props => props.theme.brand};
  }
`;

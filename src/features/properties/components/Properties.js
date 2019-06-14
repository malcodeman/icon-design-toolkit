import React from "react";
import styled from "styled-components";

const PropertiesPanel = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  bottom: 0;
  display: flex;
  width: 246px;
  flex-direction: column;
  background-color: #f5f5f5;
  border-left: 2px solid #e4e4e4;
`;

const Panel = styled.div`
  padding: 16px;
  border-bottom: 2px solid #e4e4e4;
`;

const PanelTitle = styled.h2`
  color: #3f3f3f;
  font-size: 0.6rem;
  font-weight: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

function Properties() {
  return (
    <PropertiesPanel>
      <Panel>
        <PanelTitle>Appearance</PanelTitle>
      </Panel>
    </PropertiesPanel>
  );
}

export default Properties;

import React from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";

import featherIcons from "../../store/icons/feather";

const CodeMode = styled.div`
  padding: 0 10px;
`;

const PreformattedText = styled.pre`
  white-space: pre-wrap;
  margin: 0;
`;

const StyledCode = styled.code`
  font-family: "Roboto Mono", monospace;
  font-size: 0.6rem;
  color: ${props => props.theme.primary};
`;

function Code(props) {
  const { iconId } = props;
  const icon = featherIcons.find(icon => icon.id === iconId);
  const iconProps = {
    color: props.color,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    transform: `rotate(${props.rotation})`,
    filter: `blur(${props.blur}px)`
  };
  const element = React.cloneElement(icon.component, iconProps);

  return (
    <CodeMode>
      <PreformattedText>
        <StyledCode>{ReactDOMServer.renderToStaticMarkup(element)}</StyledCode>
      </PreformattedText>
    </CodeMode>
  );
}

export default Code;

import React from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import * as FeatherIcons from "react-feather";

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
  color: ${(props) => props.theme.primary};
`;

function Code(props) {
  const { iconId } = props;
  const style = {
    color: props.color,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    transform: `rotate(${props.rotation})`,
    filter: `blur(${props.blur}px)`,
  };
  const Element = Object.values(FeatherIcons).find(
    (item) => item.displayName === iconId
  );

  return (
    <CodeMode>
      <PreformattedText>
        <StyledCode>
          {ReactDOMServer.renderToStaticMarkup(<Element style={style} />)}
        </StyledCode>
      </PreformattedText>
    </CodeMode>
  );
}

export default Code;

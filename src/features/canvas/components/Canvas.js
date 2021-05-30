import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as FeatherIcons from "react-feather";

const StyledCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.backgroundCanvas};
  transition: ${(props) => props.theme.backgroundColorTransition};
`;

function Canvas() {
  const iconDisplayName = useSelector((state) => state.canvas.iconId);
  const color = useSelector((state) => state.properties.color);
  const width = useSelector((state) => state.properties.width);
  const height = useSelector((state) => state.properties.height);
  const opacity = useSelector((state) => state.properties.opacity);
  const rotation = useSelector((state) => state.properties.rotation);
  const blur = useSelector((state) => state.properties.blur);
  const style = {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation})`,
    filter: `blur(${blur}px)`,
    style: { transition: "all 0.2s ease" },
  };
  const Element = Object.values(FeatherIcons).find(
    (item) => item.displayName === iconDisplayName
  );

  return (
    <StyledCanvas>
      <Element style={style} />
    </StyledCanvas>
  );
}

export default Canvas;

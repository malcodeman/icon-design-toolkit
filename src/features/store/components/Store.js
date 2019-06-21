import React from "react";
import styled from "styled-components";

import featherIcons from "../icons/feather";

const Wrapper = styled.div`
  transition: ${props => props.theme.backgroundColorTransition};
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(188px, 1fr));
  grid-gap: 20px;
  padding: 10%;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
  border: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

const IconName = styled.span`
  font-size: 0.8rem;
  margin-top: 20px;
  color: ${props => props.theme.primary};
`;

function Store() {
  return (
    <Wrapper>
      <Grid>
        {featherIcons.map(icon => (
          <IconWrapper key={icon.id}>
            {icon.component}
            <IconName>{icon.name}</IconName>
          </IconWrapper>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Store;

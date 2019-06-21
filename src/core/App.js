import React from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import history from "./routing/history";
import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import Toolbar from "../features/toolbar/components/Toolbar";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";
import Store from "../features/store/components/Store";

const CanvasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40vh auto;
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr 222px;
    grid-template-rows: initial;
  }
`;

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px calc(100vh - 40px);
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr;
    grid-template-rows: initial;
  }
`;

function App(props) {
  function getTheme() {
    const { darkMode } = props;
    const theme = darkMode ? darkTheme : lightTheme;

    return theme;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <Router history={history}>
        <Route
          exact
          path="/"
          render={() => (
            <CanvasGrid>
              <Toolbar />
              <Canvas />
              <Properties />
            </CanvasGrid>
          )}
        />
        <Route
          path="/store"
          render={() => (
            <StoreGrid>
              <Toolbar />
              <Store />
            </StoreGrid>
          )}
        />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default connect(
  mapStateToProps,
  null
)(App);

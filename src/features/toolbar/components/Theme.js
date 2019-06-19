import React from "react";
import { connect } from "react-redux";
import { withTheme } from "styled-components";

import { toggleDarkMode } from "../../settings/actions/settingsActionCreators";
import Moon from "../styles/icons/Moon";
import Sun from "../styles/icons/Sun";

function Theme(props) {
  const { darkMode, toggleDarkMode } = props;

  function toggleState() {
    const state = darkMode ? false : true;

    toggleDarkMode(state);
  }

  return (
    <>
      {darkMode ? (
        <Sun size={16} color={props.theme.primary} onClick={toggleState} />
      ) : (
        <Moon size={16} color={props.theme.primary} onClick={toggleState} />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default withTheme(
  connect(
    mapStateToProps,
    { toggleDarkMode }
  )(Theme)
);

import { SET_WIDTH, SET_HEIGHT, SET_COLOR } from "./propertiesActionTypes";

export const setWidth = payload => {
  return {
    type: SET_WIDTH,
    payload
  };
};

export const setHeight = payload => {
  return {
    type: SET_HEIGHT,
    payload
  };
};

export const setColor = payload => {
  return {
    type: SET_COLOR,
    payload
  };
};

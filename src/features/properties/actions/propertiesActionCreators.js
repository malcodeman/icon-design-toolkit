import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_COLOR,
  SET_OPACITY,
  SET_ROTATION
} from "./propertiesActionTypes";

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

export const setOpacity = payload => {
  return {
    type: SET_OPACITY,
    payload
  };
};

export const setRotation = payload => {
  return {
    type: SET_ROTATION,
    payload
  };
};

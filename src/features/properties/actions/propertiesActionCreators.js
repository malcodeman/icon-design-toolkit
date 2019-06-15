import { SET_WIDTH, SET_HEIGHT } from "./propertiesActionTypes";

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

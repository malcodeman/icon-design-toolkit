import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_COLOR,
  SET_OPACITY,
  SET_ROTATION
} from "../actions/propertiesActionTypes";

const initialState = {
  color: "#000",
  width: 128,
  height: 128,
  opacity: 1,
  rotation: 0
};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: action.payload
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case SET_OPACITY:
      return {
        ...state,
        opacity: action.payload
      };
    case SET_ROTATION:
      return {
        ...state,
        rotation: action.payload
      };
    default:
      return state;
  }
};

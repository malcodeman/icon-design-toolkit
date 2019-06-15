import { SET_WIDTH, SET_HEIGHT } from "../actions/propertiesActionTypes";

const initialState = {
  color: "#000",
  width: 128,
  height: 128
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
    default:
      return state;
  }
};

import { SET_ICON_ID } from "../actions/canvasActionTypes";

const initialState = {
  iconId: "GitHub",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ICON_ID:
      return {
        ...state,
        iconId: action.payload,
      };
    default:
      return state;
  }
};

import { SET_ICON_ID } from "./canvasActionTypes";

export const setIconId = payload => {
  return {
    type: SET_ICON_ID,
    payload
  };
};

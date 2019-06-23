import featherIcons from "../../store/icons/feather";
import { SET_ICON_ID } from "../actions/canvasActionTypes";

const github = featherIcons.find(icon => icon.name === "Github");
const initialState = {
  iconId: github.id
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ICON_ID:
      return {
        ...state,
        iconId: action.payload
      };
    default:
      return state;
  }
};

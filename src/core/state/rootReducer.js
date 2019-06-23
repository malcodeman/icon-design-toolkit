import { combineReducers } from "redux";

import properties from "../../features/properties/reducers/propertiesReducers";
import settings from "../../features/settings/reducers/settingsReducers";
import canvas from "../../features/canvas/reducers/canvasReducers";

const rootReducer = combineReducers({
  properties,
  settings,
  canvas
});

export default rootReducer;

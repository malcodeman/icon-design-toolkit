import { combineReducers } from "redux";

import properties from "../../features/properties/reducers/propertiesReducers";
import settings from "../../features/settings/reducers/settingsReducers";

const rootReducer = combineReducers({
  properties,
  settings
});

export default rootReducer;

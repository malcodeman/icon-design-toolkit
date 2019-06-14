import { combineReducers } from "redux";

import properties from "../../features/properties/reducers/propertiesReducers";

const rootReducer = combineReducers({
  properties
});

export default rootReducer;

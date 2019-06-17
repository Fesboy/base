import { createStore, combineReducers } from "redux";

import homeReducer from "./models/home";
import listReducer from "./models/list";

const rootReducer = combineReducers({
  home: homeReducer,
  list: listReducer
});

const store = createStore(rootReducer);

export default store;

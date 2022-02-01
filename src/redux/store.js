import { createStore, combineReducers } from "redux";
import AppReducer from "./reducers/appReducer";

const AllReducer = {
  app: AppReducer
};

const rootReducer = combineReducers(AllReducer);

const store = createStore(rootReducer);
export default store;

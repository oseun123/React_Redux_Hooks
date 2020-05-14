import todoReducer from "./todoReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

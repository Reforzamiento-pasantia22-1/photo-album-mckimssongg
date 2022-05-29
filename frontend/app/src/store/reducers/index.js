import { visibilityModal } from "./reducers_modals";
import { combineReducers } from "redux";
import  reducer_login  from "./reducer_login";

const AppUI = combineReducers({
  visibilityModal,
  reducer_login,
});

export default AppUI;

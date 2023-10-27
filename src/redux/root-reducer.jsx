import { combineReducers } from "redux";
import userSlice from "./user/slice";
import cttSlice from "./Contact/slice";

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
  user: userSlice,
  contato: cttSlice
})

import { combineReducers } from "redux";
import authReducer from "./redux/reducers/authsReducer";

const rootReducer = combineReducers({
	authReducer,
});

export default rootReducer;

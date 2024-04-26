import { combineReducers } from "redux";
import userReducer from "./loginraedux/loginReducer";

const rootReducer = combineReducers({
    userDetails:userReducer
})


export default rootReducer
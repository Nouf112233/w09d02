import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import signIn  from "./login";
import tasks from "./task";

const reducers=combineReducers({signIn,tasks});
// const reducers=combineReducers({tasks});

const store=()=>{
    return createStore(reducers,composeWithDevTools());
};

export default store();
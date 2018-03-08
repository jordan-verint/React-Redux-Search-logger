import { combineReducers } from "redux";

import search from './reducer-search';

// Import Reducers
export default combineReducers({
    search: search
});
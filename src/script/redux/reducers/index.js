import { combineReducers } from "redux";

// Import Reducers
import search from './reducer-search';

// Combine all reducers for application state to reference
export default combineReducers({
    search: search
});
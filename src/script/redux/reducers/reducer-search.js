// Decon struction of actions GET & DELETE search
import { GET_SEARCH, DELETE_SEARCH } from "../actions/action-search";

// Search reducer Anon simple function
export default function (state = [], action) {
    switch (action.type) {
        case GET_SEARCH:
            // Takes in Search request and updates application state
            return [action.search, ...state];
            break;
        case DELETE_SEARCH:
            // Find state by index removes it and adds in rest of state
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            break;
    }

    // If no case is met just return state 
    return state;
}
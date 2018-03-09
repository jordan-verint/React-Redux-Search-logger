import { GET_SEARCH, DELETE_SEARCH } from "../actions/action-search";

export default function (state = [], action) {
    switch (action.type) {
        case GET_SEARCH:
            return [action.search, ...state];
            break;
        case DELETE_SEARCH:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            break;
    }

    return state;
}
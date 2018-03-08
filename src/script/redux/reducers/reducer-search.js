import { GET_SEARCH } from "../actions/action-search";

export default function (state = [], action) {
    switch (action.type) {
        case GET_SEARCH:
            return [action.search, ...state];
            break;
        default:
            break;
    }

    return state;
}
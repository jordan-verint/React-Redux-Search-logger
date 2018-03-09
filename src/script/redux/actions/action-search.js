export const GET_SEARCH = "GET_SEARCH";
export const DELETE_SEARCH = "DELETE_SEARCH";

// Set search
export const getSearch = query => {
    return {
        type: GET_SEARCH,
        search: query
    };
}

// Delete
export const deleteSearch = index => {
    return {
        type: DELETE_SEARCH,
        index: index
    };
}
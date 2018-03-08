export const GET_SEARCH = "GET_SEARCH";

export const getSearch = query => {
    return {
        type: GET_SEARCH,
        search: query
    };
}
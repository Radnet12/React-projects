import {
    GET_SEARCH_RESULTS,
    SET_INITIAL_SETTINGS,
    UPDATE_SEARCH_TEXT,
} from "../actions/actionTypes";

const initialState = {
    searchText: "",
    results: [],
    totalPages: 1,
    currentPage: 1,
    isFetchingResults: true,
};
export const mainSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS: {
            return {
                ...state,
                results: action.results,
                totalPages: action.totalPages,
                isFetchingResults: false,
            };
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text,
            };
        }
        case SET_INITIAL_SETTINGS: {
            return {
                ...state,
                currentPage: action.page,
                isFetchingResults: true,
            };
        }
        default: {
            return state;
        }
    }
};
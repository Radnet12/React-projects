import { GET_SEARCH_RESULTS, UPDATE_SEARCH_TEXT, ZERO_OUT_SEARCH_RESULTS } from "../actions/actionTypes";

const initialState = {
    searchText: "",
    results: [],
    isFetchingResults: true
};
export const mainSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS: {
            return {
                ...state,
                results: action.list,
                isFetchingResults: false
            }
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text
            }
        }
        case ZERO_OUT_SEARCH_RESULTS: {
            return {
                ...state,
                results: []
            }
        }
        default: {
            return state
        }
    }
};
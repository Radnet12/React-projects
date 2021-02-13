import { api } from "../../api/api";

const GET_SEARCH_RESULTS = "react-movie/mainSearch/GET_SEARCH_RESULTS";
const SET_INITIAL_SETTINGS = "react-movie/mainSearch/SET_INITIAL_SETTINGS";
const UPDATE_SEARCH_TEXT = "react-movie/mainSearch/UPDATE_SEARCH_TEXT";
const ZERO_OUT_SEARCH_RESULTS = "react-movie/mainSearch/ZERO_OUT_SEARCH_RESULTS";

const initialState = {
    searchText: "",
    results: [],
    totalPages: 1,
    totalResults: 0,
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
                totalResults: action.totalResults,
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
        case ZERO_OUT_SEARCH_RESULTS: {
            return {
                ...state,
                results: [],
                totalResults: 0
            }
        }
        default: {
            return state;
        }
    }
};

export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        text,
    };
};
export const getSearchResults = (results, totalPages, totalResults) => {
    return {
        type: GET_SEARCH_RESULTS,
        results,
        totalPages,
        totalResults,
    };
};
export const setInitialSettings = (page) => {
    return {
        type: SET_INITIAL_SETTINGS,
        page,
    };
};
export const zeroOutSearchResults = () => {
    return {
        type: ZERO_OUT_SEARCH_RESULTS,
    };
};

export const loadSearchResults = (text, format, page = 1) => {
    return async (dispatch) => {
        dispatch(setInitialSettings(page));
        const [results, totalPages, totalResults] = await api.search(
            text,
            format,
            page
        );
        dispatch(getSearchResults(results, totalPages, totalResults));
    };
};

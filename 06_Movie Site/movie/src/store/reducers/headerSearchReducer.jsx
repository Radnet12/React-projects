import { api } from "../../api/api";

const GET_SEARCHED_MOVIES = "GET_SEARCHED_MOVIES";
const SET_IS_SEARCH_OPEN = "SET_IS_SEARCH_OPEN";
const UPDATE_TEXT = "UPDATE_TEXT";
const ZERO_OUT_SEARCH_RESULTS = "ZERO_OUT_SEARCH_RESULTS";

const initialStata = {
    searchedMovies: [],
    searchText: "",
    isSearchOpen: false
};
export const headerSearchReducer = (state = initialStata, action) => {
    switch (action.type) {
        case UPDATE_TEXT:
            return {
                ...state,
                searchText: action.text,
            };
        case GET_SEARCHED_MOVIES:
            return {
                ...state,
                searchedMovies: action.movies,
            };
        case ZERO_OUT_SEARCH_RESULTS:
            return {
                ...state,
                searchedMovies: [],
                searchText: ""
            };
        case SET_IS_SEARCH_OPEN: {
            return {
                ...state,
                isSearchOpen: !state.isSearchOpen,
            };
        }
        default: {
            return state;
        }
    }
};

export const updateText = (text) => {
    return {
        type: UPDATE_TEXT,
        text,
    };
};
export const getSearchedMovies = (movies) => {
    return {
        type: GET_SEARCHED_MOVIES,
        movies,
    };
};
export const zeroOutSearchResults = () => {
    return {
        type: ZERO_OUT_SEARCH_RESULTS,
    };
};
export const setIsSearchOpen = () => {
    return {
        type: SET_IS_SEARCH_OPEN,
    };
};

export const getSearchResults = (text, type) => {
    return async (dispatch) => {
        const [results] = await api.search(text, type);
        dispatch(getSearchedMovies(results));
    };
};
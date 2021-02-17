import { api } from "../../api/api";

const GET_SEARCHED_MOVIES = "react-movie/header/GET_SEARCHED_MOVIES";
const SET_IS_SEARCH_OPEN = "react-movie/header/SET_IS_SEARCH_OPEN";
const SET_IS_SEARCH_CLOSE = "react-movie/header/SET_IS_SEARCH_CLOSE";
const UPDATE_TEXT = "react-movie/header/UPDATE_TEXT";
const ZERO_OUT_SEARCH_RESULTS = "react-movie/header/ZERO_OUT_SEARCH_RESULTS";

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
        case SET_IS_SEARCH_CLOSE: {
            return {
                ...state,
                isSearchOpen: false
            }
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
export const setIsSearchClose = () => {
    return {
        type: SET_IS_SEARCH_CLOSE,
    };
};

export const getSearchResults = (text, type) => {
    return async (dispatch) => {
        try {
            const [results] = await api.search(text, type);
            dispatch(getSearchedMovies(results));
        } catch (e) {
            alert("Please, refresh the page, search is not working", e);
        }
    };
};
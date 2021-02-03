import { GET_SEARCHED_MOVIES, SET_IS_SEARCH_OPEN, UPDATE_TEXT, ZERO_OUT_SEARCH_RESULTS } from "../actions/actionTypes";

const initialStata = {
    searchedMovies: [],
    searchText: "",
    isSearchOpen: false
};
export const searchReducer = (state = initialStata, action) => {
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
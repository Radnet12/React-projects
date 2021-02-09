import { api } from "../../api/api";
import {
    GET_SEARCHED_MOVIES,
    UPDATE_TEXT,
    ZERO_OUT_SEARCH_RESULTS,
    SET_IS_SEARCH_OPEN,
} from "./actionTypes";

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
export const getSearchResults = (text, type) => {
    return async (dispatch) => {
        const [results] = await api.search(text, type);
        dispatch(getSearchedMovies(results));
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

import { api } from '../../api/api';
import {
    UPDATE_SEARCH_TEXT,
    GET_SEARCH_RESULTS,
    SET_INITIAL_SETTINGS,
    ZERO_OUT_SEARCH_RESULTS,
} from "../actions/actionTypes";
export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        text
    }
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
        type: SET_INITIAL_SETTINGS,page
    };
}
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
export const zeroOutSearchResults = () => {
    return {
        type: ZERO_OUT_SEARCH_RESULTS
    }
};
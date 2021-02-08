import { api } from '../../api/api';
import {
    UPDATE_SEARCH_TEXT,
    GET_SEARCH_RESULTS,
    SET_INITIAL_SETTINGS,
} from "../actions/actionTypes";
export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        text
    }
};
export const getSearchResults = (results, totalPages) => {
    return {
        type: GET_SEARCH_RESULTS,
        results,
        totalPages
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
        const [results, totalPages] = await api.search(text, format, page);
        dispatch(getSearchResults(results, totalPages));
    };
};
import { api } from '../../api/api';
import { UPDATE_SEARCH_TEXT, GET_SEARCH_RESULTS, ZERO_OUT_SEARCH_RESULTS } from "../actions/actionTypes";
export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        text
    }
};
export const getSearchResults = (list) => {
    return {
        type: GET_SEARCH_RESULTS,
        list
    }
};
export const loadSearchResults = (text, type) => {
    return async (dispatch) => {
        const results = await api.search(text, type);
        dispatch(getSearchResults(results));
    };
};
export const zeroOutSearchResults = () => {
    return {
        type: ZERO_OUT_SEARCH_RESULTS
    }
};
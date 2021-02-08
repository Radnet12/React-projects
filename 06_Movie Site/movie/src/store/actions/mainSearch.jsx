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
export const getSearchResults = (movies, tvs, keywords, persons) => {
    return {
        type: GET_SEARCH_RESULTS,
        movies,
        tvs,
        keywords,
        persons,
    };
};
export const setInitialSettings = (page) => {
    return {
        type: SET_INITIAL_SETTINGS,page
    };
}
export const loadSearchResults = (text, page = 1) => {
    return async (dispatch) => {
        dispatch(setInitialSettings(page));
        const movies = await api.search(text, "movie", page);
        const tvs = await api.search(text, "tv", page);
        const keywords = await api.search(text, "keyword", page);
        const persons = await api.search(text, "person", page);
        dispatch(getSearchResults(movies, tvs, keywords, persons));
    };
};
import { api } from '../../api/api';
import {
    UPDATE_SEARCH_TEXT,
    GET_SEARCH_RESULTS,
    SET_SEARCH_LOADING,
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
export const setSearchLoading = () => {
    return {
        type: SET_SEARCH_LOADING
    };
}
export const loadSearchResults = (text) => {
    return async (dispatch) => {
        dispatch(setSearchLoading());
        const movies = await api.search(text, "movie");
        const tvs = await api.search(text, "tv");
        const keywords = await api.search(text, "keyword");
        const persons = await api.search(text, "person");
        dispatch(getSearchResults(movies, tvs, keywords, persons));
    };
};
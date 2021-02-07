import {UPDATE_SEARCH_TEXT} from '../actions/actionTypes';
export const updateSearchText = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        text
    }
};
import { UPDATE_SEARCH_TEXT } from "../actions/actionTypes";

const initialState = {
    searchText: ""
};
export const mainSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text
            }
        }
        default: {
            return state
        }
    }
};
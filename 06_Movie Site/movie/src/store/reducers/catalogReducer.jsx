import { GET_MOVIE } from "../actions/actionTypes";

const initialState = {
    movie: [],
    credits: [],
    reviews: []
};
export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE: {
            return {
                ...state,
                movie: action.movie
            }
        }
        default:
            return state
    }
};
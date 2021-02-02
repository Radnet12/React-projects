import { GET_MOVIE, LOADING_MOVIE } from "../actions/actionTypes";

const initialState = {
    movie: [],
    credits: [],
    reviews: [],
    isFetchingMovie: true
};
export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE: {
            return {
                ...state,
                movie: action.movie,
                isFetchingMovie: false
            }
        }
        case LOADING_MOVIE: {
            return {
                ...state,
                isFetchingMovie: true
            }
        }
        default:
            return state
    }
};
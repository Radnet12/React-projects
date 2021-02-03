import { GET_MOVIE_INFO, LOADING_MOVIE } from "../actions/actionTypes";

const initialState = {
    movie: [],
    credits: [],
    reviews: [],
    isFetchingMovie: true
};
export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO: {
            return {
                ...state,
                movie: action.movie,
                credits: action.credits,
                reviews: action.reviews,
                isFetchingMovie: false,
            };
        }
        case LOADING_MOVIE: {
            return {
                ...state,
                isFetchingMovie: true,
            };
        }
        default:
            return state;
    }
};
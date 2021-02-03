import { api } from "../../api/api";
import { GET_MOVIE_INFO, LOADING_MOVIE } from "./actionTypes";

export const getMovieInfo = (movie, credits, reviews) => {
    return {
        type: GET_MOVIE_INFO,
        movie,
        credits,
        reviews
    }
};
export const loadingMovieInfo = () => {
    return {
        type: LOADING_MOVIE
    };
};
export const loadMovieInfo = (format, id) => {
    return async (dispatch) => {
        dispatch(loadingMovieInfo());
        const movie = await api.getMovie(format, id);
        const credits = await api.getCredits(format, id);
        const reviews = await api.getReviews(format, id);
        dispatch(getMovieInfo(movie, credits, reviews));
    };
};
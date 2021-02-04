import { api } from "../../api/api";
import { GET_MOVIE_INFO, LOADING_MOVIE } from "./actionTypes";

export const getMovieInfo = (movie, credits, reviews, keywords) => {
    return {
        type: GET_MOVIE_INFO,
        movie,
        credits,
        reviews,
        keywords
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
        const reviews = await api.getAnotherMovieInfo(format, id, "reviews");
        const keywords = await api.getAnotherMovieInfo(format, id, "keywords");
        dispatch(getMovieInfo(movie, credits, reviews, keywords));
    };
};
import { api } from "../../api/api";
import { GET_MOVIE, LOADING_MOVIE } from "./actionTypes";

export const getMovie = (movie) => {
    return {
        type: GET_MOVIE,
        movie
    }
};
export const loadingMovie = () => {
    return {
        type: LOADING_MOVIE
    };
};
export const loadMovie = (format, id) => {
    return async (dispatch) => {
        dispatch(loadingMovie());
        const result = await api.getMovie(format, id);
        dispatch(getMovie(result));
    };
};